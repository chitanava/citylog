import Navigation from "../components/Navigation.jsx";
import Map from "../components/Map.jsx";
import {Outlet} from "react-router-dom";
import ThemeController from "../components/ThemeController.jsx";

export default function Layout() {
    return (
        <div className="grid grid-cols-[auto_1fr] h-screen">
            <div className="flex">
                <div className="bg-base-300 px-3 relative z-10">
                    <ThemeController/>
                    <Navigation/>
                </div>
                <div className="w-96 shadow-xl">
                    <Outlet/>
                </div>
            </div>

            <Map/>
        </div>
    )
}
