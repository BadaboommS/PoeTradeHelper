import React from "react";
//components
import ItemTrade from "./ItemTrade";
import ItemInfo from "./ItemInfo";

export default function Item({ itemNumber, item, league, allFetchItemData }){

    return(
        <div id={`item_${itemNumber}`} className="flex flex-col lg:flex-row px-8 md:px-0 gap-4 text-center justify-center md:justify-evenly items-center w-full md:w-3/4 lg:w-full">
            <ItemInfo item={item} allFetchItemData={allFetchItemData}/>
            <ItemTrade item={item} league={league} itemNumber={itemNumber} key={itemNumber} allFetchItemData={allFetchItemData}/>
        </div>
    )
}