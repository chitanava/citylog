import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Cities from "../pages/Cities.jsx";
import Countries from "../pages/Countries.jsx";
import CreateCity from "../pages/CreateCity.jsx";
import City from "../pages/City.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Navigate to="cities"/>}/>
                    <Route path="cities" element={<Cities/>}/>
                    <Route path="cities/create" element={<CreateCity/>}/>
                    <Route path="cities/:id" element={<City/>}/>
                    <Route path="countries" element={<Countries/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
