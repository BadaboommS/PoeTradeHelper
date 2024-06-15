import React, { useEffect, useState, useRef } from "react";
//utils
import { generateTradeUrl } from "../utils/generateTradeUrl";
import { handleExplicitClass } from "../utils/generalUtils";
import { handleClusterPrice, handleUniquePrice, handleBaseType } from "../utils/handleItemPrices";

export default function ItemTrade({ item , league, itemName, itemNumber, allFetchItemData }){
    const [tradeDefence, setTradeDefence] = useState([]);
    const [tradeIlv, setTradeIlv] = useState(0);
    const [tradeLinks, setTradeLinks] = useState(0);
    const [tradeCorrupted, setTradeCorrupted] = useState("any");
    const [tradeImplicits, setTradeImplicits] = useState(item.implicits);
    const [tradeExplicits, setTradeExplicits] = useState(item.explicits);
    const [customPrecision, setCustomPrecision] = useState(false);
    const [itemEstimatedPrice, setItemEstimatedPrice] = useState([]);
    const [loader, setLoader] = useState(true);
    const didMount = useRef(false);

    useEffect(() => {
        if(didMount.current){
            if(item.rarity === "UNIQUE"){
                const {chaos, divine} = handleUniquePrice(item, allFetchItemData);
                setItemEstimatedPrice([chaos,divine]);
            }else if ((item.rarity === "RARE") && (item.baseInfo.base_type === "Cluster Jewel")){
                const {chaos, divine} = handleClusterPrice(item, allFetchItemData.cluster.lines);
                setItemEstimatedPrice([chaos,divine]);       
            }
            else{
                handleBaseType(item, allFetchItemData);
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

    function displayEstimatedPrice(chaos, divine){
        if(divine > 2){
            return (
                <p className="flex flex-row justify-center items-center text-2xl gap-2" data-tooltip={`chaos: ${chaos} | divine: ${divine}`} data-tooltip-position="top">
                    {divine.toLocaleString()}
                    <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png' alt="Divine Orb"/>
                </p>
            )
        }else{
            return(
                <p className="flex flex-row justify-center items-center text-2xl gap-2" data-tooltip={`chaos: ${chaos} | divine: ${divine}`} data-tooltip-position="top">
                    {chaos.toLocaleString()}
                    <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png' alt="Chaos"/>
                </p>
            ) 
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
                    <div>
                        {item.defence[0]?
                            item.defence.map((def,i) => {
                                return (
                                    <div className="flex flex-row mt-2 gap-4 items-center w-full" key={i}>
                                        <input type="checkbox" id={`${itemNumber}_${itemName}_defence_${i}`} onChange={()=> handleTradeDefence(def)}/>
                                        <label htmlFor={`${itemNumber}_${itemName}_defence_${i}`}><strong className="item_rarity-normal">{def.split(': ')[0]}:</strong> {def.split(': ')[1]}</label>
                                    </div>
                                )
                            })
                        :
                            <></>
                        }
                        {item.iLv?
                            <div className="flex flex-row mt-2 gap-4 items-center w-full">
                                <input type="checkbox" id={`${itemNumber}_${itemName}_ilv`} onChange={() => handleChangeIlv(item.iLv)}/>
                                <label htmlFor={`${itemNumber}_${itemName}_ilv`}><strong className="item_rarity-normal">Item level:</strong> {item.iLv}</label>
                            </div>
                        :
                            <></>
                        }
                        
                        {item.sockets[0]?
                            <div className="flex flex-row mt-2 gap-4 items-center w-full">
                                <input type="checkbox" id={`${itemNumber}_${itemName}_link`} onChange={()=> handleChangeLinks(item.sockets.length)}/>
                                <label htmlFor={`${itemNumber}_${itemName}_link`}><strong className="item_rarity-normal">Socket Links:</strong> {item.sockets.length}</label>
                            </div>
                        :
                            <></>
                        }
                        {item.corrupted?
                            <div className="flex flex-row mt-2 gap-4 items-center w-full">
                                <select name="corruptingSorting" id={`${itemNumber}_${itemName}_corrupted`} className='text-black p-1' defaultValue={"any"} onChange={(e) => setTradeCorrupted(e.target.value)}>
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
                                        <div className="flex flex-row mt-2 gap-4 justify-between w-full" key={i}>
                                            <div className="flex flex-row gap-4 max-w-3/4">
                                                <input type="checkbox" id={`${itemNumber}_${itemName}_implicit_${i}`} onChange={() => handleChangeImplicits(implicit.text)}/>
                                                <label htmlFor={`${itemNumber}_${itemName}_implicit_${i}`} className={handleExplicitClass(implicit.text)}>{implicit.text}</label>
                                            </div>
                                            {
                                                customPrecision?
                                                        <>
                                                        <div className="flex flex-row gap-4">
                                                            <label htmlFor={`${itemNumber}_${itemName}_implicit_precision_${i}`} className={handleExplicitClass(implicit.text)}>Exact:</label>
                                                            <input type="checkbox" id={`${itemNumber}_${itemName}_implicit_precision_${i}`} onChange={() => handleCustomPrecisionChange(implicit, "implicit")}></input>
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
                                        <div className="flex flex-row mt-2 gap-4 justify-between w-full" key={i}>
                                            <div className="flex flex-row gap-4 max-w-3/4">
                                                <input type="checkbox" id={`${itemNumber}_${itemName}_explicit_${i}`} onChange={() => handleChangeExplicits(explicit.text)}/>
                                                <label htmlFor={`${itemNumber}_${itemName}_explicit_${i}`} className={handleExplicitClass(explicit.text)}>{explicit.text}</label>
                                            </div>
                                            {
                                                customPrecision?
                                                        <>
                                                            <div className="flex flex-row gap-4">
                                                                <label htmlFor={`${itemNumber}_${itemName}_explicit_precision_${i}`} className={handleExplicitClass(explicit.text)}>Exact: </label>
                                                                <input type="checkbox" id={`${itemNumber}_${itemName}_explicit_precision_${i}`} onChange={() => handleCustomPrecisionChange(explicit, "explicit")}></input>
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
                        (!loader && itemEstimatedPrice.length !== 0)?
                            <>
                                <div className="flex flex-row md:flex-col">
                                    <p className="flex items-center"><strong>Estimated Price: </strong></p>
                                    {displayEstimatedPrice(itemEstimatedPrice[0],itemEstimatedPrice[1])}
                                </div>
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
