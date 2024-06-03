import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({ open, children, onClose }) => {
    if(!open) return null
    return ReactDom.createPortal(
        <>
            <div className="modal_bg"/>
            <div className="modal_content rounded-sm">
                { children }
                <div className="flex justify-center md:justify-end">
                    <button onClick={ onClose } className="bg-stone-500 text-white text-center p-2 rounded-sm">Got It !</button>
                </div>
            </div>
        </>,
        document.getElementById('modal_portal')
    )
}

export default Modal