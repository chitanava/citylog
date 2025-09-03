import {useCities} from "../contexts/CitiesContext.jsx";
import {useEffect} from "react";

export default function useFetchCities() {
    const {cities, fetchCities, loaded} = useCities();

    useEffect(() => {
        if (loaded) {
            return;
        }

        fetchCities().catch((err) => {
            console.error(err.message);
        })
    }, [fetchCities, loaded]);

    return [cities, loaded];
}