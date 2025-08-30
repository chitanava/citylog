import Search from "../components/Search.jsx";
import {useCities} from "../contexts/CitiesContext.jsx";
import {useEffect, useState} from "react";
import CityList from "../components/CityList.jsx";
import ContentPanel from "../components/ContentPanel.jsx";
import Loading from "../components/Loading.jsx";

export default function Cities() {
    const {fetchCities, isLoading} = useCities();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        (async () => {
            await fetchCities();
            setShowContent(true);
        })()
    }, [fetchCities]);

    if (isLoading) {
        return <Loading/>;
    }

    return showContent &&
        (<ContentPanel>
            <Search/>
            <CityList/>
        </ContentPanel>)

}
