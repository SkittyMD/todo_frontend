import React from "react";
import HeaderItem from "./HeaderItem/HeaderItem";
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <HeaderItem key='tasks' logo path={'/'} childern='MyTasks' />
                <nav className="nav">
                    <HeaderItem key='add-task' path={'/add-task'} childern="Добавить задачу" />
                </nav>
            </div>
        </div>
    )
}

export default Header