import {createContext, useCallback, useContext, useReducer} from "react";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const CitiesContext = createContext();

const initialState = {
    cities: [],
    isLoading: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "cities/fetched":
            return {...state, cities: action.payload, isLoading: false};
        case "cities/loading":
            return {...state, isLoading: true};
        case "cities/delete":
            return {...state, cities: state.cities.filter(cities => cities.id !== action.payload)};
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}

export default function CitiesProvider({children}) {
    const [{cities, isLoading}, dispatch] = useReducer(reducer, initialState);

    const fetchCities = useCallback(async () => {
        try {
            dispatch({
                type: "cities/loading",
            })

            const res = await fetch(`${VITE_API_URL}/cities`);
            const data = await res.json();

            dispatch({
                type: "cities/fetched",
                payload: data,
            })
        } catch (err) {
            console.error(err.message);
        }


        // console.log(data)
    }, [])

    async function deleteCity(cityId) {
        const res = await fetch(`${VITE_API_URL}/cities/${cityId}`, {
            method: "DELETE",
        });

        if (res.ok === false) {
            throw new Error("Error deleting city!");
        }

        dispatch({
            type: "cities/delete",
            payload: cityId,
        })
    }

    return (
        <CitiesContext.Provider value={{
            cities,
            isLoading,
            fetchCities,
            deleteCity
        }}>
            {children}
        </CitiesContext.Provider>
    )
}

export function useCities() {
    const context = useContext(CitiesContext);

    if (context === undefined) {
        throw new Error('Contexts must be used within CitiesProvider!');
    }

    return context;
}
