import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({ open, children }) => {
    if(!open) return null
    return ReactDom.createPortal(
        <>
            <div className="modal_bg"/>
            <div className="modal_content rounded-sm max-h-[90%] overflow-y-scroll">
                { children }
            </div>
        </>,
        document.getElementById('modal_portal')
    )
}

export default Modal