import React, { useEffect, useState, useRef } from "react";
//utils
import { generateTradeUrl } from "../utils/generateTradeUrl";
import { handleExplicitClass } from "../utils/generalUtils";
import { handleClusterPrice, handleUniquePrice, handleBaseTypePrice, displayEstimatedPrice } from "../utils/handleItemPrices";
import Modal from "./Modal";

export default function ItemTrade({ itemNumber, item, league, allFetchItemData }){
    const [tradeDefence, setTradeDefence] = useState([]);
    const [tradeIlv, setTradeIlv] = useState(0);
    const [tradeLinks, setTradeLinks] = useState(0);
    const [tradeCorrupted, setTradeCorrupted] = useState("any");
    const [tradeImplicits, setTradeImplicits] = useState(item.implicits);
    const [tradeExplicits, setTradeExplicits] = useState(item.explicits);
    const [customPrecision, setCustomPrecision] = useState(false);
    const [itemEstimatedPriceArr, setItemEstimatedPriceArr] = useState([]);
    const [loader, setLoader] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const didMount = useRef(false);

    const itemName = item.rarity === 'UNIQUE'? `${item.name} - ${item.base}` : `${item.base}`;

    useEffect(() => {
        if(didMount.current){
            let itemPriceInfo = [];
            if(item.rarity === "UNIQUE"){
                itemPriceInfo = handleUniquePrice(item, allFetchItemData);
                setItemEstimatedPriceArr(itemPriceInfo);
            }else if ((item.rarity === "RARE") && (item.baseInfo.base_type === "Cluster Jewel")){
                itemPriceInfo = handleClusterPrice(item, allFetchItemData.cluster.lines);
                setItemEstimatedPriceArr(itemPriceInfo);       
            }
            else{
                itemPriceInfo = handleBaseTypePrice(item, allFetchItemData);
                setItemEstimatedPriceArr(itemPriceInfo);
            }
        }else{
            didMount.current = true;
        }
    },[allFetchItemData])

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 200);
    },[allFetchItemData])

    function handleChangeIlv(e){ (tradeIlv === 0)? setTradeIlv(e) : setTradeIlv(0) }

    function handleChangeLinks(e){ (tradeLinks === 0)? setTradeLinks(e) : setTradeLinks(0) }

    function handleTradeDefence(e){
        if(tradeDefence.indexOf(e) === -1){
            setTradeDefence([...tradeDefence, e]);
        }else{
            let tempArray = [...tradeDefence];
            tempArray.splice(tradeDefence.indexOf(e), 1);
            setTradeDefence(tempArray);
        }
    }

    function handleChangeImplicits(e){
        let tempArray = [...tradeImplicits];
        tempArray.forEach((implicit)=>{
            if(implicit.text === e){
                implicit.display = !implicit.display;
            }
        });
        setTradeImplicits(tempArray);
    }

    function handleChangeExplicits(e){
        let tempArray = [...tradeExplicits];
        tempArray.forEach((explicit)=>{
            if(explicit.text === e){
                explicit.display = !explicit.display;
            }
        });
        setTradeExplicits(tempArray);
    }

    function changeAllPrecision(bool){
        let tempImplicitsArray = [...tradeImplicits];
        let tempExplicitsArray = [...tradeExplicits];
        tempImplicitsArray.forEach((implicit)=>{ implicit.precision = bool });
        tempExplicitsArray.forEach((explicit)=>{ explicit.precision = bool });
        setTradeImplicits(tempImplicitsArray);
        setTradeExplicits(tempExplicitsArray);
    }

    function handleChangePrecision(e){
        if(e === "min"){
            setCustomPrecision(false);
            changeAllPrecision(false);
        }
        if(e === "exact"){
            setCustomPrecision(false);
            changeAllPrecision(true);
        }
        if(e === "custom"){
            setCustomPrecision(true);
            changeAllPrecision(false);
        }
    }
    function handleCustomPrecisionChange(e, type){
        console.log(e);
        if(type === "implicit"){
            let tempArray = [...tradeImplicits];
            let newImplicit = e;
            newImplicit.precision = !newImplicit.precision;
            tempArray.splice(tempArray.indexOf(e), 1, newImplicit);
            setTradeImplicits([...tempArray]);
        }else{
            let tempArray = [...tradeExplicits];
            let newExplicit = e;
            newExplicit.precision = !newExplicit.precision;
            tempArray.splice(tempArray.indexOf(e), 1, newExplicit);
            setTradeExplicits([...tempArray]);
        }
    }

    let tradeUrl = generateTradeUrl(tradeIlv, tradeLinks, tradeCorrupted, tradeDefence, tradeImplicits, tradeExplicits, item, league);

    useEffect(()=>{
        tradeUrl = generateTradeUrl(tradeIlv, tradeLinks, tradeCorrupted, tradeDefence, tradeImplicits, tradeExplicits, item, league);
    },[]);

    return(
        <section className="flex flex-col p-5 w-full lg:w-6/12">
            <p>Select desired modifiers for trade:</p>
            {(item.defence[0] || item.iLv || item.sockets[0] || item.corrupted)? 
                    <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
                :
                    <></>
            }
            <div className="flex flex-col items-center text-start item_stats">
                <div className="w-full">
                    {item.defence[0]?
                        item.defence.map((def,i) => {
                            return (
                                <div className="flex flex-row my-2 gap-4 items-center w-full" key={i}>
                                    <input type="checkbox" id={`${itemNumber}_${itemName}_defence_${i}`} className="h-fit" onChange={()=> handleTradeDefence(def)}/>
                                    <label htmlFor={`${itemNumber}_${itemName}_defence_${i}`}><strong className="item_rarity-normal">{def.split(': ')[0]}:</strong> {def.split(': ')[1]}</label>
                                </div>
                            )
                        })
                    :
                        <></>
                    }
                    {item.iLv?
                        <div className="flex flex-row my-2 gap-4 items-center w-full">
                            <input type="checkbox" id={`${itemNumber}_${itemName}_ilv`} className="h-fit" onChange={() => handleChangeIlv(item.iLv)}/>
                            <label htmlFor={`${itemNumber}_${itemName}_ilv`}><strong className="item_rarity-normal">Item level:</strong> {item.iLv}</label>
                        </div>
                    :
                        <></>
                    }
                    
                    {item.sockets[0]?
                        <div className="flex flex-row my-2 gap-4 items-center w-full">
                            <input type="checkbox" id={`${itemNumber}_${itemName}_link`} className="h-fit" onChange={()=> handleChangeLinks(item.sockets.length)}/>
                            <label htmlFor={`${itemNumber}_${itemName}_link`}><strong className="item_rarity-normal">Socket Links:</strong> {item.sockets.length}</label>
                        </div>
                    :
                        <></>
                    }
                    {item.corrupted?
                        <div className="flex flex-row my-2 gap-4 items-center w-full">
                            <select name="corruptingSorting" id={`${itemNumber}_${itemName}_corrupted`} className='text-black p-1 h-fit' defaultValue={"any"} onChange={(e) => setTradeCorrupted(e.target.value)}>
                                <option value="any">any</option>
                                <option value="yes">yes</option>
                                <option value="no">no</option>
                            </select>
                            <label htmlFor={`${itemNumber}_${itemName}_corrupted`} className="item_corrupted">Corrupted</label>
                        </div>
                    :
                        <></>
                    }
                </div>
                {item.implicits.length? 
                    <div className="w-full">
                        <div>
                            <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
                            <p className="text-center">Implicits: </p>
                        </div>
                        <div>
                            {
                                item.implicits.map((implicit,i) => {
                                    return(
                                        <div className="flex flex-row my-2 gap-4 justify-between w-full" key={i}>
                                            <div className="flex flex-row gap-4 max-w-3/4 items-center">
                                                <input type="checkbox" id={`${itemNumber}_${itemName}_implicit_${i}`} className="h-fit" onChange={() => handleChangeImplicits(implicit.text)}/>
                                                <label htmlFor={`${itemNumber}_${itemName}_implicit_${i}`} className={handleExplicitClass(implicit.text)}>{implicit.text}</label>
                                            </div>
                                            {
                                                customPrecision?
                                                        <>
                                                        <div className="flex flex-row gap-4 items-center">
                                                            <label htmlFor={`${itemNumber}_${itemName}_implicit_precision_${i}`} className={handleExplicitClass(implicit.text)}>Exact:</label>
                                                            <input type="checkbox" id={`${itemNumber}_${itemName}_implicit_precision_${i}`} className="h-fit" onChange={() => handleCustomPrecisionChange(implicit, "implicit")}></input>
                                                        </div>
                                                        </>
                                                    :
                                                        <></>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                :
                    <></>
                }
                {item.explicits.length?
                    <div className="w-full">
                        <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
                        <p className="text-center">Explicits: </p>
                        <div>
                            {
                                item.explicits.map((explicit, i) => {
                                    return (
                                        <div className="flex flex-row my-2 gap-4 justify-between w-full" key={i}>
                                            <div className="flex flex-row gap-4 max-w-3/4 items-center">
                                                <input type="checkbox" id={`${itemNumber}_${itemName}_explicit_${i}`} className="h-fit" onChange={() => handleChangeExplicits(explicit.text)}/>
                                                <label htmlFor={`${itemNumber}_${itemName}_explicit_${i}`} className={handleExplicitClass(explicit.text)}>{explicit.text}</label>
                                            </div>
                                            {
                                                customPrecision?
                                                        <>
                                                            <div className="flex flex-row gap-4 items-center">
                                                                <label htmlFor={`${itemNumber}_${itemName}_explicit_precision_${i}`} className={handleExplicitClass(explicit.text)}>Exact: </label>
                                                                <input type="checkbox" id={`${itemNumber}_${itemName}_explicit_precision_${i}`} className="h-fit" onChange={() => handleCustomPrecisionChange(explicit, "explicit")}></input>
                                                            </div>
                                                        </>
                                                    :
                                                        <></>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                :
                    <></>
                }
            </div>
            <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
            <div className="flex justify-center w-full">
                <div className="flex flex-col md:flex-row items-center justify-evenly w-full md:w-3/4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor={`${itemNumber}_${itemName}_sorting`}>Trading Precision</label>
                        <select name="sorting" id={`${itemNumber}_${itemName}_sorting`} className='text-black p-1' defaultValue={"min"} onChange={(e) => handleChangePrecision(e.target.value)}>
                            <option value="min">min</option>
                            <option value="exact">exact</option>
                            <option value="custom">custom</option>
                        </select>
                    </div>
                    {loader? <div className="lds-dual-ring"></div> : <></>}
                    {
                        (!loader && itemEstimatedPriceArr !== undefined && itemEstimatedPriceArr.length !== 0 )?
                            <>
                                {(itemEstimatedPriceArr.length !== 1)?
                                    <>
                                        <button onClick={() => setIsOpen(true)} className="text-black bg-slate-200 rounded-md p-2 decoration-inherit">Check Prices</button>
                                        <Modal open={isOpen}>
                                            <div>
                                                <h3 className='text-center'>Estimated Prices for:</h3>
                                                <p className="text-lg">{`${itemName}`}</p>
                                                <ul className="flex flex-col items-center justify-center">
                                                    {itemEstimatedPriceArr.map((price,i) => {
                                                        return  (
                                                            <>
                                                                <li key={i} className="flex flex-row items-center justify-center text-lg gap-2">
                                                                    <p className="m-0 p-0">{`Item level: ${price.levelRequired} ${price.variant? `- Influence: ${price.variant}` : ''}`}</p>
                                                                    <p className="m-0 p-0">{displayEstimatedPrice(price)}</p>
                                                                </li>
                                                                <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                                <div className="flex justify-center md:justify-end">
                                                    <button onClick={ () => setIsOpen(false)} className="bg-stone-500 text-white text-center p-2 rounded-sm">Close</button>
                                                </div>
                                            </div>
                                        </Modal>
                                    </>
                                :
                                    <>
                                        <div className="flex flex-row md:flex-col">
                                            <p className="flex items-center"><strong>Estimated Price: </strong></p>
                                            {displayEstimatedPrice(itemEstimatedPriceArr[0])}
                                        </div>
                                    </>
                                }
                            </>
                        :
                            <>
                                <div className="flex flex-row md:flex-col">
                                    <p className="flex items-center"><strong>Estimated Price:</strong></p>
                                    <p>Not fetched</p>
                                </div>
                            </>  
                    }
                    <a href={tradeUrl} className="text-black bg-slate-200 rounded-md p-4 decoration-inherit" target="_blank" rel="noopener noreferrer">Trade</a>
                </div>
            </div>
        </section>
    )
}