import CountriesHeader from "./CountriesHeader.jsx";

function formatCityList(cities, limit = 3) {
    if (cities.length > limit) {
        return `${cities.slice(0, limit).join(', ')} ... +${cities.length - limit}`;
    }

    return cities.join(', ');
}

export default function CountryList({cities}) {
    const countries = cities.reduce((countriesArr, city) => {
        const existing = countriesArr.find(country => country.name === city.country);

        if (existing) {
            existing.cities.push(city.cityName);
            return countriesArr;
        }

        return [
            ...countriesArr,
            {
                name: city.country,
                cities: [city.cityName],
                flag: city.flag,
            }
        ]
    }, [])

    return (
        <>
            <CountriesHeader countries={countries}/>
            <ul>
                {countries.map(country => (
                    <li className="flex gap-4 items-center px-6 mb-8" key={country.name}>
                        <img
                            className="mask mask-squircle w-14"
                            src={country.flag}
                            alt="demo"
                        />
                        <div className="flex-1">
                            <div>{country.name}</div>
                            <div className="text-sm text-base-content/60">{formatCityList(country.cities, 2)}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
