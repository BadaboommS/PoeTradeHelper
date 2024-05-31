import React from 'react';
import { handleExplicitClass } from "../utils/handleExplicitClass";

export default function ItemInfo ({ item, itemName }) {
  return (
    <div className="w-full lg:w-5/12">
        <div className={`item_border-${item.rarity.toLowerCase()} item_background-${item.rarity.toLowerCase()} p-5`}>
            <span className={`item_rarity-${item.rarity.toLowerCase()} text-2xl`}><strong>{itemName}</strong></span>
        </div>
        <section className={`item_border-${item.rarity.toLowerCase()} item_background-${item.rarity.toLowerCase()} p-5 flex flex-col items-center`}>
            <div>
                {item.defence[0]?
                    item.defence.map((def,i) => {
                        return <p key={i}><strong className="item_rarity-normal">{def.split(': ')[0]}:</strong> {def.split(': ')[1]}</p>
                    })
                :
                    <></>
                }
                {item.rarity?
                    <p><strong className="item_rarity-normal">Rarity:</strong> <span className={`item_rarity-${item.rarity.toLowerCase()}`}>{item.rarity}</span></p>
                :
                    <></>
                }
                {item.iLv?
                    <p><strong className="item_rarity-normal">Item Level:</strong> {item.iLv}</p>
                :
                    <></>
                }
                
                {item.sockets[0]?
                    <>
                        <p><strong className="item_rarity-normal">Sockets:</strong> {item.sockets.map((socket,i) => <span key={i} className={`socket-${socket}`}>{socket}</span>)}</p>
                        <p><strong className="item_rarity-normal">Links:</strong> {item.sockets.length}</p>
                    </>
                :
                    <></>
                }
            </div>
            <div className="item_stats">
                {item.implicits.length? 
                    <div>
                        <p className={`item_split-${item.rarity.toLowerCase()}`}></p>
                        {
                            item.implicits.map((implicit,i) => {
                                return (<p key={i}className={handleExplicitClass(implicit.text)}>{implicit.text}</p>)
                            })
                        }
                    </div> 
                :
                    <></>
                }
                {item.explicits.length?
                    <>
                        <p className={`item_split-${item.rarity.toLowerCase()}`}></p>
                        {
                            item.explicits.map((explicit,i) => {
                                return <p key={i} className={handleExplicitClass(explicit.text)}>{explicit.text}</p>
                            })
                        }
                    </>
                :
                    <></>
                }
                {item.corrupted?
                    <>
                        <p className={`item_split-${item.rarity.toLowerCase()}`}></p>
                        <p className="item_corrupted">Corrupted</p>
                    </>
                :
                    <></>
                }
            </div>
        </section>
    </div>
  )
}