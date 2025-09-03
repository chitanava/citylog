import Search from "../components/Search.jsx";
import {useState} from "react";
import CityList from "../components/CityList.jsx";
import useFetchCities from "../hooks/useFetchCities.js";
import EmptyListMessage from "../components/EmptyListMessage.jsx";

export default function Cities() {
    const [cities, loaded] = useFetchCities();
    const [search, setSearch] = useState("");

    const filteredCities = search.length > 0
        ? cities.filter(city => city.cityName.toLowerCase().includes(search.toLowerCase()))
        : cities;

    return loaded && (
        cities.length > 0
            ? <><Search search={search} onSearch={setSearch}/>
                <CityList cities={filteredCities}/></>
            : <EmptyListMessage/>
    )

}
