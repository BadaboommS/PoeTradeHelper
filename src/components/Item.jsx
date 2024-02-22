import React from "react";
import styled from "styled-components";
//components
import { ItemTrade } from "./ItemTrade";


//styledComponents
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0;
    gap: 20px;
    text-align: center;
    justify-content: center;
    @media screen and (min-width: 768px){
        padding: 30px 40px;
    }
`
const StyledContainer = styled.div`
    width: 30vw;
    @media screen and (max-width: 768px){
        width: 80vw;
    }
`
const StyledTitle = styled.div`
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-size: calc(15px + 0.4vw);
    padding: 10px;
`
const StyledSection = styled.section`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export function Item({item, league, itemNumber}){
    
    let itemName = item.name;
    if(item.rarity === "UNIQUE"){
        itemName = item.name + " - " + item.base;
    }
    if(item.rarity !== "NORMAL"){
        itemName = item.base;
    }
    return(
        <StyledDiv>
            <StyledContainer>
                <StyledTitle className={`item_border-${item.rarity.toLowerCase()} item_background-${item.rarity.toLowerCase()}`}>
                    <span className={`item_rarity-${item.rarity.toLowerCase()}`}><strong>{itemName}</strong></span>
                </StyledTitle>
                <StyledSection className={`item_border-${item.rarity.toLowerCase()} item_background-${item.rarity.toLowerCase()}`}>
                    <div>
                        {item.defence[0]?
                            item.defence.map((def,i) => {
                                return <p key={i}><strong className="item_rarity-normal">{def.split(': ')[0]}:</strong> {def.split(': ')[1]}</p>
                            })
                        :
                            <></>
                        }
                        <p><strong className="item_rarity-normal">Rarity:</strong> <span className={`item_rarity-${item.rarity.toLowerCase()}`}>{item.rarity}</span></p>
                        <p><strong className="item_rarity-normal">Item Level:</strong> {item.iLv}</p>
                        {item.sockets[0]?
                            <>
                                <p><strong className="item_rarity-normal">Sockets:</strong> {item.sockets.map((socket,i) => <span key={i} className={`socket-${socket}`}>{socket}</span>)
                            
                            }</p>
                                <p><strong className="item_rarity-normal">Links:</strong> {item.sockets.length}</p>
                            </>
                        :
                            <></>
                        }
                    </div>
                    <div className="item_stats">
                        {item.implicits.length?<p className={`item_split-${item.rarity.toLowerCase()}`}></p> :<></>}
                        {item.implicits.length? item.implicits.map((implicit,i) => {
                            if(implicit.text.includes('{crafted}')){
                                return (<p key={i} className="item_crafted">{implicit.text}</p>)
                            }
                            if(implicit.text.includes('{enchanted}')){
                                return (<p key={i} className="item_enchanted">{implicit.text}</p>)
                            }
                            return (<p key={i}>{implicit.text}</p>)
                        })
                        : <></>}
                        <p className={`item_split-${item.rarity.toLowerCase()}`}></p>
                        {item.explicits.length? item.explicits.map((explicits,i) => {
                            if(explicits.text.includes('{crafted}')){
                                return (<p key={i} className="item_crafted">{explicits.text}</p>)
                            }
                            if(explicits.text.includes('{fractured}')){
                                return (<p key={i} className="item_fractured">{explicits.text}</p>)
                            }
                            return (<p key={i}>{explicits.text}</p>)
                        }) : <></>}
                        {item.corrupted?
                            <>
                                <p className={`item_split-${item.rarity.toLowerCase()}`}></p>
                                <p className="item_corrupted">Corrupted</p>
                            </>
                        :
                            <></>
                        }
                    </div>
                </StyledSection>
            </StyledContainer>
            <ItemTrade item={item} league={league} itemName={itemName} itemNumber={itemNumber} key={itemNumber}/>
        </StyledDiv>
    )
}