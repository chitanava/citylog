import CountryList from "../components/CountryList.jsx";
import useFetchCities from "../hooks/useFetchCities.js";

export default function Countries() {
    const [cities, loaded] = useFetchCities();

    return loaded && <CountryList cities={cities}/>
}
