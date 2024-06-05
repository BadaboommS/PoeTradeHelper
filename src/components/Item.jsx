import React from "react";
//components
import ItemTrade from "./ItemTrade";
import ItemInfo from "./ItemInfo";
//utils
import { fetchData } from '../utils/fetchData';


export default function Item({ itemNumber, item, league }){

    let itemData;

    let query = `https://poe.ninja/api/data/itemoverview?league=${league}`
    if(item.rarity === "UNIQUE"){
        query += `Name=${item.itemName}`;
    }else{
        query += `BaseType=${item.itemBase}`
    }

    const fetchItemData = async() => {
        itemData = await fetchData(query);
    }

    //setTimeout(fetchItemData(),500*itemNumber)
    //console.log(itemData);

    return(
        <div className="flex flex-row flex-wrap mx-10 gap-4 text-center justify-start items-center w-full">
            <ItemInfo item={item}/>
            <ItemTrade item={item} league={league} itemNumber={itemNumber} key={itemNumber}/>
        </div>
    )
}