import {NavLink} from "react-router-dom";
import {useCities} from "../contexts/CitiesContext.jsx";

export default function Navigation() {
    const {isLoading} = useCities();

    return (
        <ul className="">
            <li className="mb-8">
                <NavLink to="cities" className="flex flex-col items-center">
                    {
                        ({isActive}) => (
                            <>
                                <span
                                    className={`size-8 flex items-center justify-center rounded-md mb-1 ${isActive ? 'bg-base-content/20' : ''}`}>
                                    {
                                        isActive
                                            ? isLoading
                                                ? <span className="loading loading-spinner loading-xs"></span>
                                                : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" className="size-6">
                                                    <path fillRule="evenodd"
                                                          d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                                                          clipRule="evenodd"/>
                                                </svg>)
                                            : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"/>
                                            </svg>)
                                    }
                                </span>

                                <span className="text-sm">Cities</span>
                            </>
                        )
                    }
                </NavLink>
            </li>

            <li>
                <NavLink to="countries" className="flex flex-col items-center">
                    {
                        ({isActive}) => (
                            <>
                                <span
                                    className={`size-8 flex items-center justify-center rounded-md mb-1 ${isActive ? 'bg-base-content/20' : ''}`}>
                                    {
                                        isActive
                                            ? isLoading
                                                ? <span className="loading loading-spinner loading-xs"></span>
                                                : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" className="size-6">
                                                    <path fillRule="evenodd"
                                                          d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                                                          clipRule="evenodd"/>
                                                </svg>)
                                            : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"/>
                                            </svg>)
                                    }
                                </span>

                                <span className="text-sm">Countries</span>
                            </>
                        )
                    }
                </NavLink>
            </li>
        </ul>
    )
}
