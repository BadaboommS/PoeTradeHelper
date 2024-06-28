import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({ open, children, close }) => {
    if(!open) return null
    return ReactDom.createPortal(
        <>
            <div className="modal_bg" onClick={close}/>
            <div className="modal_content rounded-sm max-h-[90%] max-w-[90%] overflow-y-scroll">
                { children }
            </div>
        </>,
        document.getElementById('modal_portal')
    )
}

export default Modal