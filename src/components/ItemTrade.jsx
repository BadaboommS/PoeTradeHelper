import React, { useEffect, useState } from "react";
import styled from "styled-components";
//utils
import { generateTradeUrl } from "../utils/generateTradeUrl";
import { handleExplicitClass } from "../utils/handleExplicitClass";

//styledComponents
const StyledFlex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    gap: 20px;
    align-items: center;
`
const StyledLink = styled.a`
    border-radius: 5px;
    color: black;
    background-color: #EEEEEE;
    text-decoration: inherit;
    padding: 5px;
`

export default function ItemTrade({item , league, itemName, itemNumber}){

    const [tradeDefence, setTradeDefence] = useState([]);
    const [tradeIlv, setTradeIlv] = useState(0);
    const [tradeLinks, setTradeLinks] = useState(0);
    const [tradeCorrupted, setTradeCorrupted] = useState(false);
    const [tradeImplicits, setTradeImplicits] = useState(item.implicits);
    const [tradeExplicits, setTradeExplicits] = useState(item.explicits);

    function handleChangeIlv(e){
        if(tradeIlv === 0){
            setTradeIlv(e);
        }else{
            setTradeIlv(0);
        }
    }

    function handleChangeLinks(e){
        if(tradeLinks === 0){
            setTradeLinks(e);
        }else{
            setTradeLinks(0);
        }
    }

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

    let tradeUrl = generateTradeUrl(tradeIlv, tradeLinks, tradeCorrupted, tradeDefence, tradeImplicits, tradeExplicits, item, league);

    useEffect(()=>{
        tradeUrl = generateTradeUrl(tradeIlv, tradeLinks, tradeCorrupted, tradeDefence, tradeImplicits, tradeExplicits, item, league);
    },[]);

    return(
        <section className="flex flex-col p-5 w-full lg:w-6/12">
            <p>Select desired modifiers for trade:</p>
            <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
            <div className="flex flex-col items-center text-start item_stats">
                <div className="text-center w-full">
                    {item.defence[0]?
                        item.defence.map((def,i) => {
                            return (
                                <StyledFlex key={i}>
                                    <input type="checkbox" id={`${itemNumber}_${itemName}_defence_${i}`} onChange={()=> handleTradeDefence(def)}/>
                                    <label htmlFor={`${itemNumber}_${itemName}_defence_${i}`}><strong className="item_rarity-normal">{def.split(': ')[0]}:</strong> {def.split(': ')[1]}</label>
                                </StyledFlex>
                            )
                        })
                    :
                        <></>
                    }
                    {item.ilv?
                        <StyledFlex>
                            <input type="checkbox" id={`${itemNumber}_${itemName}_ilv`} onChange={() => handleChangeIlv(item.iLv)}/>
                            <label htmlFor={`${itemNumber}_${itemName}_ilv`}><strong className="item_rarity-normal">Item level:</strong> {item.iLv}</label>
                        </StyledFlex>
                    :
                        <></>
                    }
                    
                    {item.sockets[0]?
                        <StyledFlex>
                            <input type="checkbox" id={`${itemNumber}_${itemName}_link`} onChange={()=> handleChangeLinks(item.sockets.length)}/>
                            <label htmlFor={`${itemNumber}_${itemName}_link`}><strong className="item_rarity-normal">Socket Links:</strong> {item.sockets.length}</label>
                        </StyledFlex>
                    :
                        <></>
                    }
                    {item.corrupted?
                        <StyledFlex>
                            <input type="checkbox" id={`${itemNumber}_${itemName}_corrupted`} onChange={() => setTradeCorrupted(!tradeCorrupted)}/>
                            <label htmlFor={`${itemNumber}_${itemName}_corrupted`} className="item_corrupted">Corrupted</label>
                        </StyledFlex>
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
                                        <StyledFlex key={i}>
                                            <input type="checkbox" id={`${itemNumber}_${itemName}_implicit_${i}`} onChange={() => handleChangeImplicits(implicit.text)}/>
                                            <label htmlFor={`${itemNumber}_${itemName}_implicit_${i}`} className={handleExplicitClass(implicit.text)}>{implicit.text}</label>
                                        </StyledFlex>
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
                        {
                            item.explicits.map((explicit, i) => {
                                    return (
                                        <StyledFlex key={i}>
                                            <input type="checkbox" id={`${itemNumber}_${itemName}_explicit_${i}`} onChange={() => handleChangeExplicits(explicit.text)}/>
                                            <label htmlFor={`${itemNumber}_${itemName}_explicit_${i}`} className={handleExplicitClass(explicit.text)}>{explicit.text}</label>
                                        </StyledFlex>
                                    )
                            })
                        }
                    </div>
                :
                    <></>
                }
            </div>
            <p className={`item_split item_split-${item.rarity.toLowerCase()}`}></p>
            <StyledFlex className="justify-center">
                <StyledLink href={tradeUrl} target="_blank" rel="noopener noreferrer">Trade</StyledLink>
                <p>|</p>
                <p><strong>Estimed Value:</strong> (Not implemented yet)</p>
            </StyledFlex>
        </section>
    )
}