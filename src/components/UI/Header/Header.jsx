import React from "react";
import HeaderItem from "./HeaderItem/HeaderItem";
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <HeaderItem key='tasks' logo path={'/'} childern='MyTasks' />
                <nav className="nav">
                    <HeaderItem key='add-new-task' path={'/add-new-task'} childern="Add new task" />
                </nav>
            </div>
        </div>
    )
}

export default Header