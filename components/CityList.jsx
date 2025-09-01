import CityListItem from "./CityListItem.jsx";

export default function CityList({cities}) {
    return (
        <ul>
            {cities.map((city) => <CityListItem key={city.id} city={city}/>)}
        </ul>
    )
}
