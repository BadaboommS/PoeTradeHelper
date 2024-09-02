import React, { useEffect, useRef, useState } from "react";

export default function Nav({ itemsList }){

    const [isOpen, setIsOpen] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const navRef = useRef(null);

    const handleScrollTop = () => { window.scrollTo({top: 0, behavior:'smooth'}) };

    useEffect(() => {
        const handleScrollButtonVisibility = () => window.scrollY > 300 ? setShowScrollButton(true) : setShowScrollButton(false);
        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
           window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
     }, []);

    useEffect(() => {
        const onClickListener = (event) => {
            if(isOpen && navRef.current && !navRef.current.contains(event.target)){ setIsOpen(false); }            
        };
        window.addEventListener('click', onClickListener);
        return () => {
            window.removeEventListener('click', onClickListener);
        };
    }, [isOpen, navRef]);

    return(
        <div ref={navRef}>
            <button className="fixed top-2 right-2 p-2 rounded" onClick={() => setIsOpen(!isOpen)}>{isOpen? "Close" : "Open"}</button>
            <div className={`navModal ${isOpen? "z-50" : "-z-10"}`}>
                <div className={`
                        relative bg-black border border-gray-500 rounded
                        overflow-hidden transition-all
                        ${isOpen? "right-0" : "-right-[200%]"}
                `}>
                    <ul id='Nav' className="max-h-96 overflow-y-scroll text-center px-4">
                        {
                            itemsList.map((item, i) => {
                                return (item.baseInfo.item_category !== undefined)
                                    ?   <li className="scale-100 hover:scale-125 transition-all">
                                            <a href={`#item_${i}`} className={`item_rarity-${item.rarity.toLowerCase()}`}>{(item.rarity == 'UNIQUE')? item.name : item.base}</a>
                                        </li>
                                    :  <></>
                            })
                        }
                    </ul>
                </div>
            </div>
            {(showScrollButton)
                ?   <div className="fixed bottom-5 right-2 z-50">
                        <button className='cursor-pointer rounded-md p-4' onClick={handleScrollTop}>
                            ↑
                        </button>
                    </div> 
                :  <></>
            }
        </div>
    )
}