import CountryList from "../components/CountryList.jsx";
import useFetchCities from "../hooks/useFetchCities.js";
import EmptyListMessage from "../components/EmptyListMessage.jsx";

export default function Countries() {
    const [cities, loaded] = useFetchCities();

    return loaded && (cities.length > 0
        ? <CountryList cities={cities}/>
        : <EmptyListMessage/>)
}
