import Search from "../components/Search.jsx";
import {useCities} from "../contexts/CitiesContext.jsx";
import {useEffect, useState} from "react";
import CityList from "../components/CityList.jsx";
import ContentPanel from "../components/ContentPanel.jsx";
import Loading from "../components/Loading.jsx";

export default function Cities() {
    const {cities, fetchCities, isLoading} = useCities();
    const [showContent, setShowContent] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
            await fetchCities();
            setShowContent(true);
        })()
    }, [fetchCities]);

    const filteredCities = search.length > 0
        ? cities.filter(city => city.cityName.toLowerCase().includes(search.toLowerCase()))
        : cities;

    if (isLoading) {
        return <Loading/>;
    }

    return showContent &&
        (<ContentPanel>
            <Search search={search} onSearch={setSearch}/>
            <CityList cities={filteredCities}/>
        </ContentPanel>)

}
