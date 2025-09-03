import {useCities} from "../contexts/CitiesContext.jsx";
import {useState} from "react";
import DeleteButton from "./DeleteButton.jsx";

export default function CityListItem({city}) {
    const {deleteCity} = useCities();
    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete(cityId) {
        setIsDeleting(true);

        try {
            await deleteCity(cityId)
            setIsDeleting(false);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <li className="grid grid-cols-[1fr_auto] items-center">
            <a href="#" className="flex gap-4 items-center px-6 py-4 hover:bg-base-200">
                <img
                    className="mask mask-squircle w-14"
                    src={city.flag}
                    alt={`${city.cityName}`}
                />
                <div className="flex-1">
                    <div>
                        {city.cityName}
                    </div>
                    <div className="text-sm text-base-content/60">
                        {city.country}
                    </div>
                </div>


                <DeleteButton cityId={city.id} onDelete={handleDelete} isDeleting={isDeleting}/>
            </a>
        </li>
    )
}
