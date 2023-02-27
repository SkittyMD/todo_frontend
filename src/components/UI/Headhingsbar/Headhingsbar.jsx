import React from "react";
import HeadhingsbarItem from "./HeadhingsbarItem/HeadhingsbarItem";
import './Headhingsbar.css'

const Headhingsbar = ({headhings}) => {
    return (
        <div className="Headhingsbar">
            <HeadhingsbarItem
                key='all'
                childern='Все задачи'
                path='../'
            />
            {headhings.map(el => {
                return (
                    <HeadhingsbarItem
                        key={el}
                        childern={el}
                        path={el}
                    />
                )
            })}
        </div>
    )
}

export default Headhingsbar