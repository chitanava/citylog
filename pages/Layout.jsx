import Navigation from "../components/Navigation.jsx";
import Map from "../components/Map.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className="grid grid-cols-[450px_1fr] h-screen">
            <div className="bg-base-200 p-8 space-y-6">
                <Navigation/>
                <Outlet/>
            </div>
            <Map/>
        </div>
    )
}
