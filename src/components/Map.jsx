import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from "react-leaflet";
import * as L from "leaflet";
import {useCities} from "../contexts/CitiesContext.jsx";
import {useNavigate} from "react-router-dom";
import formatDate from "../utils/date";
import {useEffect, useState} from "react";
import useUrlCoordinates from "../hooks/useUrlCoordinates.js";

const icon = {
    html: `<svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="size-8"> 
                <path fill-rule="evenodd" 
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" 
                    clip-rule="evenodd" /> 
            </svg> `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
}

const locationIcon = L.divIcon({
    ...icon,
    className: 'text-orange-400',
});

const activeLocationIcon = L.divIcon({
    ...icon,
    className: 'text-info',
});

export default function Map() {
    const {cities} = useCities();
    const [position, setPosition] = useState([50, 0]);
    const [lat, lng] = useUrlCoordinates();

    useEffect(() => {
        if (lat && lng) setPosition([lat, lng]);
    }, [lat, lng]);

    return (
        <MapContainer center={position} zoom={5} scrollWheelZoom={true} zoomControl={false} className="h-screen">
            <TileLayer
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            {
                cities.map(city => (
                    <Marker position={[city.coordinates.lat, city.coordinates.lng]} icon={locationIcon}
                            key={city.id}>
                        <Popup>
                            <div>
                                <div className="text-lg font-bold">{city.cityName}</div>
                                <div
                                    className="text-xs text-base-content/60">{city.country}, {formatDate(city.date)}</div>
                            </div>
                        </Popup>
                    </Marker>))
            }

            {lat && lng && <Marker position={[lat, lng]} icon={activeLocationIcon} key={crypto.randomUUID()}/>}

            <ChangeCenter position={position}/>

            <MapClickEvent/>
        </MapContainer>
    )
}

function ChangeCenter({position}) {
    const map = useMap();
    map.setView(position);

    return null;
}

function MapClickEvent() {
    const navigate = useNavigate();

    useMapEvent('click', (e) => {
        const {lat, lng} = e.latlng;

        navigate(`cities/create?lat=${lat}&lng=${lng}`);
    });

    return null;
}
