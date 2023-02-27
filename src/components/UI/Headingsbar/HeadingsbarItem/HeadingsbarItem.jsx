import React from "react";
import { NavLink } from "react-router-dom";
import './HeadingsbarItem.scss'

const HeadingsbarItem = ({ childern, path }) => {
    return (
        <NavLink
            className='HeadingsbarItem'
            to={'/tasks/' + path}
        >
            {childern}
        </NavLink>
    )
}

export default HeadingsbarItem