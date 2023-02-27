import React from "react";
import './Button.css'

const Button = ({ onClick, children, type }) => {
    return (
        <button
            type={type ? type : 'submit'}
            className="Button"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button