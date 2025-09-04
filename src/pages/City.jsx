import {useEffect, useState} from "react";
import {useCities} from "../contexts/CitiesContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import formatDate from "../utils/date.js"

export default function City() {
    const {getCity, selectedCity: city} = useCities()
    const {id: cityId} = useParams();
    const [loaded, setLoaded] = useState(() => city?.id === Number(cityId));
    const navigate = useNavigate();

    useEffect(() => {
        if (loaded) {
            return;
        }

        getCity(cityId)
            .catch(err => console.log(err))
            .finally(() => setLoaded(true));
    }, [cityId, getCity, loaded])

    return loaded && (
        <>
            <div className="h-[90px] flex items-center">
                <div className="px-4">
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><a>Cities</a></li>
                            <li>{city.cityName}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-4 mb-6">
                <div
                    className="flex items-center gap-2 bg-base-200 p-6 rounded-md border-3 border-dashed border-base-content/50">
                    <img
                        className="mask mask-squircle w-20"
                        src={city.flag}
                        alt=""
                    />
                    <div className="leading-1">
                        <h1 className="font-bold text-lg">{city.cityName}</h1>
                        <ul className="flex gap-2">
                            <li>
                                <span className="text-sm text-base-content/60">{city.country},</span>
                            </li>
                            <li>
                                <span className="text-sm text-base-content/60">{formatDate(city.date)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-12 space-y-6">
                <p>{city.note}</p>

                <button onClick={() => navigate('/cities')} className="btn btn-block btn-info btn-circle btn-soft">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd"
                              d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                              clipRule="evenodd"/>
                    </svg>

                    <span>Back to Cities</span>
                </button>
            </div>
        </>
    )
}
