import React, { useEffect } from "react";
//components
import ItemTrade from "./ItemTrade";
import ItemInfo from "./ItemInfo";

export default function Item({ itemNumber, item, league }){

    return(
        <div className="flex flex-row flex-wrap mx-10 gap-4 text-center justify-start items-center w-full">
            <ItemInfo item={item}/>
            <ItemTrade item={item} league={league} itemNumber={itemNumber} key={itemNumber}/>
        </div>
    )
}