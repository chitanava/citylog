import {useSearchParams} from "react-router-dom";

export default function useUrlCoordinates() {
    const [query] = useSearchParams();

    const lat = Number(query.get("lat"));
    const lng = Number(query.get("lng"));
    const shouldCenter = query.get("center");

    return [lat, lng, shouldCenter];
}