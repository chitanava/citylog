import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

export default function Map() {
    const position = [51.505, -0.09]

    return (
        <MapContainer center={position} zoom={6} scrollWheelZoom={true} zoomControl={false} className="h-screen">
            <TileLayer
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
