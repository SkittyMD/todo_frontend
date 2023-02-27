import React from "react";
import { Outlet } from "react-router-dom"
import Header from "../Header/Header";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

export default Layout