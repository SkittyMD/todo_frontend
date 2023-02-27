import React from "react";
import './Button.scss'

const Button = ({ onClick, children, type, closeX}) => {
    return (
        <button
            type={type ? type : 'submit'}
            className={`Button ${closeX ? 'close' : null}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button