import React from "react";
//components
import ItemTrade from "./ItemTrade";
import ItemInfo from "./ItemInfo";


export default function Item({item, league, itemNumber}){
    
    let itemName = item.base;
    if(item.rarity === "UNIQUE"){
        itemName = item.name + " - " + item.base;
    }
    
    return(
        <div className="flex flex-row flex-wrap mx-10 gap-4 text-center justify-start items-center w-full">
            <ItemInfo item={item} itemName={itemName}/>
            <ItemTrade item={item} league={league} itemName={itemName} itemNumber={itemNumber} key={itemNumber}/>
        </div>
    )
}