import React, { useEffect, useRef, useState } from 'react';
import { handleExplicitClass } from "../utils/generalUtils";

export default function ItemInfo ({ item, allFetchItemData }) {
    const didMount = useRef(false);
    const [itemImg, setItemImg] = useState(null);
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        if(didMount.current){
            if(item.rarity === "UNIQUE"){
                let index = allFetchItemData[item.baseInfo.item_category].lines.map((e) => e.name).indexOf(item.name);
                if(index !== -1){
                    setItemImg(allFetchItemData[item.baseInfo.item_category].lines[index].icon);
                }
            }else if(item.baseInfo.base_type === "Cluster Jewel"){
                if(item.base === "Small Cluster Jewel"){ setItemImg("https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/0eb1a9d981/NewGemBase1.png") }
                if(item.base === "Medium Cluster Jewel"){ setItemImg("https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/78f6bf8356/NewGemBase2.png") }
                if(item.base === "Large Cluster Jewel"){ setItemImg("https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/db35e60885/NewGemBase3.png") }
            }else{
                let index = allFetchItemData.baseType.lines.map((e) => e.name).indexOf(item.base);
                if(index !== -1){
                    setItemImg(allFetchItemData.baseType.lines[index].icon);
                }
            }
        }else{
            didMount.current = true;
        }
    },[allFetchItemData])

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 200);
    },[loader])

  return (
    <section className="w-full lg:w-5/12">
        <div className={`item_border-${item.rarity.toLowerCase()} item_background-${item.rarity.toLowerCase()} p-5`}>
            <span className={`item_rarity-${item.rarity.toLowerCase()} text-2xl`}><strong>{item.rarity === 'UNIQUE'? `${item.name} - ${item.base}` : `${item.base}`}</strong></span>
        </div>
        <div className={`item_border-${item.rarity.toLowerCase()} item_background-${item.rarity.toLowerCase()} p-5 flex flex-col items-center`}>
            <div className='flex flex-row gap-4 items-center'>
                {loader? <div className="lds-dual-ring"></div> : <></>}
                {(!loader && itemImg !== null)
                    ?   <div>
                            <img src={itemImg} className="scale-100 lg:scale-110 xl:scale-125 my-0 lg:my-2 xl:my-4" alt="Loading..." title={item.rarity === "UNIQUE"? item.name : item.base}></img>
                        </div>
                    :   <></>  
                }
                <div>
                    {(item.influence[0])
                        ?   item.influence.map((inf,i) => {
                                return <p key={i}><strong className="item_rarity-normal">{inf}</strong> Item</p>
                            })
                        :   <></>
                    }
                    {(item.defence[0])
                        ?   item.defence.map((def,i) => {
                                return <p key={i}><strong className="item_rarity-normal">{def.split(': ')[0]}:</strong> {def.split(': ')[1]}</p>
                            })
                        :   <></>
                    }
                    {(item.rarity)
                        ?   <p><strong className="item_rarity-normal">Rarity:</strong> <span className={`item_rarity-${item.rarity.toLowerCase()}`}>{item.rarity}</span></p>
                        :   <></>
                    }
                    {(item.iLv)
                        ?   <p><strong className="item_rarity-normal">Item Level:</strong> {item.iLv}</p>
                        :   <></>
                    }
                    
                    {(item.sockets[0])
                        ?   <>
                                <p><strong className="item_rarity-normal">Sockets:</strong> {item.sockets.map((socket,i) => <span key={i} className={`socket-${socket}`}>{socket}</span>)}</p>
                                <p><strong className="item_rarity-normal">Links:</strong> {item.sockets.length}</p>
                            </>
                        :   <></>
                    }
                </div>
            </div>
            
            <div className="item_stats">
                {(item.implicits.length)
                    ?   <div>
                            <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
                            {
                                item.implicits.map((implicit,i) => {
                                    return (<p key={i}className={handleExplicitClass(implicit.text)}>{implicit.text}</p>)
                                })
                            }
                        </div> 
                    :   <></>
                }
                {(item.explicits.length)
                    ?   <>
                            <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
                            {
                                item.explicits.map((explicit,i) => {
                                    return <p key={i} className={handleExplicitClass(explicit.text)}>{explicit.text}</p>
                                })
                            }
                        </>
                    :   <></>
                }
                {(item.corrupted)
                    ?   <>
                            <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
                            <p className="item_corrupted">Corrupted</p>
                        </>
                    :   <></>
                }
            </div>
        </div>
    </section>
  )
}