import {useEffect, useRef} from "react";

export default function useSearch() {
    const searchInput = useRef(null);
    
    useEffect(() => {
        function callback(e) {
            if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                searchInput.current.focus();
            }
        }

        document.documentElement.addEventListener("keydown", callback);

        return () => {
            document.documentElement.removeEventListener("keydown", callback);
        }
    }, [])

    return [searchInput];
}