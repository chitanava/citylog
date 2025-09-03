import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import {useCities} from "../contexts/CitiesContext.jsx";
import useUrlCoordinates from "../hooks/useUrlCoordinates.js";

const LOCATION_API_URL = import.meta.env.VITE_LOCATION_API_URL;
const FLAG_API_URL = import.meta.env.VITE_FLAG_API_URL;
const FLAG_API_KEY = import.meta.env.VITE_FLAG_API_KEY;

const formInitialState = {
    city: "", date: "", note: "", country: "", flag: "", lat: "", lng: ""
}

export default function CreateCity() {
    const {createCity} = useCities();
    const [formData, setFormData] = useState(formInitialState);
    const [isGeocodeLoading, setIsGeocodeLoading] = useState(false);
    const [lat, lng] = useUrlCoordinates();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCityData() {
            setIsGeocodeLoading(true);

            try {
                const locationRes = await fetch(`${LOCATION_API_URL}/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);

                if (!locationRes.ok) {
                    throw new Error("Failed to fetch city data!");
                }

                const location = await locationRes.json();

                const flagRes = await fetch(`${FLAG_API_URL}/v1/countryflag?country=${location.countryCode}`, {
                    headers: {
                        "X-Api-Key": FLAG_API_KEY
                    }
                });

                if (!flagRes.ok) {
                    throw new Error("Failed to fetch flag data!");
                }

                const flag = await flagRes.json();

                if (!flag || (Array.isArray(flag) && flag.length === 0)) {
                    throw new Error("No flag data found!");
                }

                setFormData(prev => ({
                    ...prev,
                    country: location.countryName,
                    flag: flag.rectangle_image_url,
                    lat,
                    lng
                }));

                setFormData(prev => ({
                    ...prev,
                    city: location.city
                }));

                setIsGeocodeLoading(false);
            } catch (e) {
                console.error(e.message);
            }
        }

        fetchCityData();
    }, [lat, lng]);

    function handleChange(e) {
        const {name, value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.date === "") {
            return;
        }

        (async () => {
            try {
                setIsGeocodeLoading(true);
                await createCity(formData);
                navigate('/cities');
            } catch (err) {
                console.error(err);
            }
        })()
    }

    return (<>
            <div className="h-[90px] flex items-center">
                <div className="px-4">
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><a>Cities</a></li>
                            <li>Add City</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-12">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">City name</legend>
                        <input name="city" disabled={isGeocodeLoading} value={formData.city} type="text"
                               className="input" onChange={handleChange}/>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Date</legend>
                        <input required name="date" value={formData.date} type="date" className="input"
                               onChange={handleChange}/>
                        <p className="label">When did you go to Milan?</p>
                    </fieldset>
                    <fieldset className="fieldset mb-8">
                        <legend className="fieldset-legend">Notes</legend>
                        <textarea name="note" value={formData.note} className="textarea h-24"
                                  onChange={handleChange}></textarea>
                        <div className="label">Notes about your trip to Milan</div>
                    </fieldset>
                    <div className="">
                        <button className="btn btn-circle btn-block btn-info mb-4" disabled={isGeocodeLoading}>
                            {isGeocodeLoading
                                ? <LoadingSpinner/>
                                : <span>Add</span>}
                        </button>
                        <button className="btn btn-circle btn-block btn-soft" type="button"
                                onClick={() => navigate(-1)}>Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
