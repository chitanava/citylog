import Search from "../components/Search.jsx";
import {useCities} from "../contexts/CitiesContext.jsx";
import {useEffect, useState} from "react";
import CityList from "../components/CityList.jsx";

export default function Cities() {
    const {cities, fetchCities, loaded} = useCities();
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (loaded) {
            return;
        }

        fetchCities().catch((err) => {
            console.error(err.message);
        })
    }, [fetchCities, loaded]);

    const filteredCities = search.length > 0
        ? cities.filter(city => city.cityName.toLowerCase().includes(search.toLowerCase()))
        : cities;

    return loaded && (<>
        <Search search={search} onSearch={setSearch}/>
        <CityList cities={filteredCities}/>
    </>)

}
