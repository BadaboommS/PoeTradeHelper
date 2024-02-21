import React, { useEffect, useState } from "react";
import styled from "styled-components";
//utils
import { generateTradeUrl } from "../utils/generateTradeUrl";

//styledComponents
const StyledItemModifierSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
`
const StyledFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`
const StyledSection = styled.section`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 50vw;
    @media screen and (max-width: 768px){
        width: 90vw;
    }
`
const StyledLink = styled.a`
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    background-color: #EEEEEE;
    text-decoration: inherit;
    font-family: 'Fontin SmallCaps Regular';
    padding: 5px;
`
const StyledSplit = styled.p`
    margin: 1rem auto;
`

export function ItemTrade({item , league, itemName, itemNumber}){

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
        <StyledSection>
                <p>Select desired modifiers for trade:</p>
                <StyledSplit className={`item_split-${item.rarity.toLowerCase()}`}></StyledSplit>
                <StyledItemModifierSection className="item_stats">
                    <div>
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
                        <StyledFlex>
                            <input type="checkbox" id={`${itemNumber}_${itemName}_ilv`} onChange={() => handleChangeIlv(item.iLv)}/>
                            <label htmlFor={`${itemNumber}_${itemName}_ilv`}><strong className="item_rarity-normal">Item level:</strong> {item.iLv}</label>
                        </StyledFlex>
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
                    {item.implicits.length? <StyledSplit className={`item_split-${item.rarity.toLowerCase()}`}></StyledSplit> :<></>}
                    <div>
                        {item.implicits.length?<p>Implicits: </p> :<></>}
                        {item.implicits.length? 
                            item.implicits.map((implicit,i) => {
                                if(implicit.text.includes('{crafted}')){
                                    return (
                                        <StyledFlex key={i}>
                                            <input type="checkbox" id={`${itemNumber}_${itemName}_implicit_${i}`} onChange={() => handleChangeImplicits(implicit.text)}/>
                                            <label htmlFor={`${itemNumber}_${itemName}_implicit_${i}`} className="item_crafted">{implicit.text}</label>
                                        </StyledFlex>
                                    )
                                }
                                if(implicit.text.includes('{enchanted}')){
                                    return (
                                        <StyledFlex key={i}>
                                            <input type="checkbox" id={`${itemNumber}_${itemName}_implicit_${i}`} onChange={() => handleChangeImplicits(implicit.text)}/>
                                            <label htmlFor={`${itemNumber}_${itemName}_implicit_${i}`} className="item_enchanted">{implicit.text}</label>
                                        </StyledFlex>
                                    )
                                }
                                return (
                                    <StyledFlex key={i}>
                                        <input type="checkbox" id={`${itemNumber}_${itemName}_implicit_${i}`} onChange={() => handleChangeImplicits(implicit.text)}/>
                                        <label htmlFor={`${itemNumber}_${itemName}_implicit_${i}`}>{implicit.text}</label>
                                    </StyledFlex>
                                )
                            })
                        : 
                            <></>
                        }
                    </div>
                    <StyledSplit className={`item_split-${item.rarity.toLowerCase()}`}></StyledSplit>
                    <div>
                        {item.explicits.length?<p>Explicits: </p> :<></>}
                        {item.explicits.length? 
                            item.explicits.map((explicit, i) => {
                                if(explicit.text.includes('{crafted}')){
                                    return (
                                        <StyledFlex key={i}>
                                            <input type="checkbox" id={`${itemNumber}_${itemName}_explicit_${i}`} onChange={() => handleChangeExplicits(explicit.text)}/>
                                            <label htmlFor={`${itemNumber}_${itemName}_explicit_${i}`} className="item_crafted">{explicit.text}</label>
                                        </StyledFlex>
                                    )
                                }
                                if(explicit.text.includes('{fractured}')){
                                    return (
                                        <StyledFlex key={i}>
                                            <input type="checkbox" id={`${itemNumber}_${itemName}_explicit_${i}`} onChange={() => handleChangeExplicits(explicit.text)}/>
                                            <label htmlFor={`${itemNumber}_${itemName}_explicit_${i}`} className="item_fractured">{explicit.text}</label>
                                        </StyledFlex>
                                    )
                                }
                                return ((
                                    <StyledFlex key={i}>
                                        <input type="checkbox" id={`${itemNumber}_${itemName}_explicit_${i}`} onChange={() => handleChangeExplicits(explicit.text)}/>
                                        <label htmlFor={`${itemNumber}_${itemName}_explicit_${i}`}>{explicit.text}</label>
                                    </StyledFlex>
                                ))
                            }) 
                        : 
                            <></>
                        }
                    </div>
                </StyledItemModifierSection>
                <StyledSplit className={`item_split-${item.rarity.toLowerCase()}`}></StyledSplit>
                <StyledFlex>
                    <StyledLink href={tradeUrl} target="_blank" rel="noopener noreferrer">Trade</StyledLink>
                    <p>|</p>
                    <p><strong>Estimed Value:</strong> (Not implemented yet)</p>
                </StyledFlex>
            </StyledSection>
    )
}