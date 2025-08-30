import {useCities} from "../contexts/CitiesContext.jsx";
import {useState} from "react";
import DeleteButton from "./DeleteButton.jsx";

export default function CityListItem({city, index, count}) {
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

    const firstChild = count === 1 ? 'py-0' : index === 0 ? 'pb-4' : '';
    const lastChild = index === count - 1 ? 'pt-4' : '';

    return (
        <li className={`grid grid-cols-[1fr_auto] items-center ${firstChild || lastChild || 'py-4'}`}>
            <a href="#">
                <div className="flex gap-4 items-center group">
                    <div className="text-4xl font-thin opacity-30 tabular-nums group-hover:opacity-60">
                        {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                        <div className="text-sm">
                            {city.cityName}
                        </div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                            {city.country}
                        </div>
                    </div>
                </div>
            </a>

            <DeleteButton cityId={city.id} onDelete={handleDelete} isDeleting={isDeleting}/>
        </li>
    )
}
