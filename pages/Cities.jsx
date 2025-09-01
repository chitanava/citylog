import Search from "../components/Search.jsx";
import {useCities} from "../contexts/CitiesContext.jsx";
import {useEffect, useState} from "react";
import CityList from "../components/CityList.jsx";

export default function Cities() {
    const {cities, fetchCities} = useCities();
    const [showContent, setShowContent] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
            try {
                await fetchCities();
                setShowContent(true);
            } catch (err) {
                console.error(err.message);
            }
        })()
    }, [fetchCities]);

    const filteredCities = search.length > 0
        ? cities.filter(city => city.cityName.toLowerCase().includes(search.toLowerCase()))
        : cities;
    
    return showContent && (<>
        <Search search={search} onSearch={setSearch}/>
        <CityList cities={filteredCities}/>
    </>)

}
