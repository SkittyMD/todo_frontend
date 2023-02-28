import React from "react";
import './Modal.scss'

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'backdrop active' : 'backdrop'} onClick={() => { setActive(false) }}>
            <div className={active ? 'content__Modal active' : 'content__Modal'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal