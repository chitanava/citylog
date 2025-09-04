import {createContext, useCallback, useContext, useReducer} from "react";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const CitiesContext = createContext();

const initialState = {
    cities: [],
    selectedCity: null,
    isLoading: false,
    loaded: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "cities/fetched":
            return {...state, cities: action.payload, isLoading: false, loaded: true};
        case "cities/loading":
            return {...state, isLoading: true};
        case "city/fetched":
            return {...state, selectedCity: action.payload, isLoading: false};
        case "city/delete":
            return {...state, cities: state.cities.filter(cities => cities.id !== action.payload)};
        case "city/create":
            return {...state, cities: [...state.cities, action.payload]};
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}

export default function CitiesProvider({children}) {
    const [{cities, isLoading, loaded, selectedCity}, dispatch] = useReducer(reducer, initialState);

    const fetchCities = useCallback(async () => {
        dispatch({
            type: "cities/loading",
        })

        const res = await fetch(`${VITE_API_URL}/cities`);

        if (!res.ok) {
            throw new Error("Error fetching Cities!");
        }

        const data = await res.json();

        dispatch({
            type: "cities/fetched",
            payload: data,
        })
    }, [])

    async function deleteCity(cityId) {
        const res = await fetch(`${VITE_API_URL}/cities/${cityId}`, {
            method: "DELETE",
        });

        if (res.ok === false) {
            throw new Error("Error deleting city!");
        }

        dispatch({
            type: "city/delete",
            payload: cityId,
        })
    }

    async function createCity(data) {
        const body = {
            cityName: data.city,
            country: data.country,
            flag: data.flag,
            note: data.note,
            date: new Date(data.date).toISOString(),
            coordinates: {
                lat: data.lat,
                lng: data.lng
            }
        };

        const res = await fetch(`${VITE_API_URL}/cities`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        })

        if (!res.ok) {
            throw new Error("Error creating city!");
        }

        const createdCity = await res.json();

        dispatch({
            type: "city/create",
            payload: createdCity,
        });
    }

    const getCity = useCallback(async (cityId) => {
        dispatch({
            type: "cities/loading",
        })

        const res = await fetch(`${VITE_API_URL}/cities/${cityId}`)

        if (!res.ok) {
            throw new Error("Error fetching city!");
        }

        const data = await res.json();

        dispatch({
            type: "city/fetched",
            payload: data
        })
    }, [])

    return (
        <CitiesContext.Provider value={{
            cities,
            isLoading,
            fetchCities,
            deleteCity,
            loaded,
            createCity,
            getCity,
            selectedCity
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
