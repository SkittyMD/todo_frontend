import React from "react";
import { NavLink } from "react-router-dom";
import './HeaderItem.css'

const HeaderItem = ({ childern, path, logo }) => {
    const headerItemClass = logo ? 'HeaderItem logo' : 'HeaderItem'
    return (
        <NavLink
            className={headerItemClass}
            to={path}
        >
            {childern}
        </NavLink>
    )
}

export default HeaderItem