import React from "react";
import './Loader.scss'

const Loader = ({ display }) => {
    return (
        <div style={{ display: `${display ? 'block' : 'none'}` }}>
            <div className="lds-dual-ring" />
        </div>
    )
}

export default Loader