import React from "react";
import { NavLink } from "react-router-dom";
import './HeadhingsbarItem.css'

const HeadhingsbarItem = ({ childern, path }) => {
    return (
        <NavLink
            className='HeadhingsbarItem'
            to={'/tasks/' + path}
        >
            {childern}
        </NavLink>
    )
}

export default HeadhingsbarItem