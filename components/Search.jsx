import useSearch from "../hooks/useSearch.js";

export default function Search({search, onSearch}) {
    const [searchInput] = useSearch();

    return (
        <div className="h-[90px] flex items-center">
            <div className="px-4 grow">
                <label className="input w-full rounded-full">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input ref={searchInput} value={search} onChange={(e) => onSearch(e.target.value)} type="search"
                           className="grow" placeholder="Search"/>
                    <kbd className="kbd kbd-sm">⌘ K</kbd>
                </label>
            </div>
        </div>
    )
}
