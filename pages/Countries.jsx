import {useCities} from "../contexts/CitiesContext.jsx";
import {useEffect} from "react";
import CountryList from "../components/CountryList.jsx";

export default function Countries() {
    const {cities, fetchCities, loaded} = useCities();

    useEffect(() => {
        if (loaded) {
            return;
        }

        fetchCities().catch((err) => {
            console.error(err.message);
        })
    }, [fetchCities, loaded]);


    return loaded && <CountryList cities={cities}/>
}
