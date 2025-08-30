import CityListItem from "./CityListItem.jsx";

export default function CityList({cities}) {
    return (
        <ul className="divide-y divide-base-300">
            {cities.map((city, index) => <CityListItem key={city.id} city={city} index={index} count={cities.length}/>)}
        </ul>
    )
}
