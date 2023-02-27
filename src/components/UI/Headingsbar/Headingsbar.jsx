import React from "react";
import HeadingsbarItem from "./HeadingsbarItem/HeadingsbarItem";
import './Headingsbar.css'

const Headingsbar = ({headhings}) => {
    return (
        <div className="Headingsbar">
            <HeadingsbarItem
                key='all'
                childern='Все задачи'
                path='../'
            />
            {headhings.length ? headhings.map(el => {
                return (
                    <HeadingsbarItem
                        key={el}
                        childern={el}
                        path={el}
                    />
                )
            }) : null}
        </div>
    )
}

export default Headingsbar