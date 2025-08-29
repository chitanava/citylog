import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <div role="tablist" className="tabs tabs-box shadow-none justify-center">
            <NavLink
                to="cities"
                role="tab"
                className={({isActive}) => `tab ${isActive ? 'tab-active' : ''}`}>Cities</NavLink>

            <NavLink
                to="countries"
                role="tab"
                className={({isActive}) => `tab ${isActive ? 'tab-active' : ''}`}>Countries</NavLink>
        </div>
    )
}
