import React, { Fragment, useEffect, useState } from 'react';
import Item from './Item';
import { fetchData } from '../utils/generalUtils';

export default function ItemFeed ({ items, leagueChoice }){
   const [allFetchItemData, setAllFetchItemData] = useState({});
   let containsUniqueWeapons = false;
   let containsUniqueArmour = false;
   let containsUniqueAccessory = false;
   let containsUniqueFlasks = false;
   let containsUniqueJewels = false;
   let containsClusterJewels = false;

   for(let i = 0, l = items.length; i < l; i++){
      if(items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "weapons" && containsUniqueWeapons === false){
         containsUniqueWeapons = true;
      }
      if(items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "armour" && containsUniqueArmour === false){
         containsUniqueArmour = true;
      }
      if(items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "accessories" && containsUniqueAccessory === false){
         containsUniqueAccessory = true;
      }
      if(items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "flasks" && containsUniqueFlasks === false){
         containsUniqueFlasks = true;
      }
      if(items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "jewels" && containsUniqueJewels === false){
         containsUniqueJewels = true;
      }
      if(items[i].rarity !== "UNIQUE" && items[i].base.includes('Cluster') && containsClusterJewels === false){
         containsClusterJewels = true;
      }
   }
   
   const handleFetchUniques = async () => {
      let uniqueWeaponsData = null;
      let uniqueArmourData = null;
      let uniqueAccessoryData = null;
      let uniqueFlaskData = null;
      let uniqueJewelData = null;
      let clusterJewelData = null;
      let itemBaseData = null;
      let allItemData = null;

      //let proxyUrl = `http://localhost:8080/`;
      if(containsUniqueWeapons){uniqueWeaponsData = await fetchData(`https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueWeapon`)}
      if(containsUniqueArmour){uniqueArmourData = await fetchData(`https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueArmour`)}
      if(containsUniqueAccessory){uniqueAccessoryData = await fetchData(`https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueAccessory`)}
      if(containsUniqueFlasks){uniqueFlaskData = await fetchData(`https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueFlask`)}
      if(containsUniqueJewels){uniqueJewelData = await fetchData(`https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueJewel`)}
      if(containsClusterJewels){clusterJewelData = await fetchData(`https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=ClusterJewel`)}
      itemBaseData = await fetchData(`https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=BaseType`);

      allItemData = await {
         weapons: uniqueWeaponsData,
         armour: uniqueArmourData,
         accessories: uniqueAccessoryData,
         flasks: uniqueFlaskData,
         jewels: uniqueJewelData,
         cluster: clusterJewelData,
         baseType: itemBaseData
      }
      setAllFetchItemData(allItemData)
   }

   useEffect(() => {
      handleFetchUniques();
   },[items, leagueChoice])
   
   return (
      items.map((item, i) => {
         return (item.baseInfo.item_category !== undefined)
            ?  <Fragment key={i}>
                  <Item 
                     itemNumber = {i}
                     item = {item}
                     league = {leagueChoice}
                     allFetchItemData = {allFetchItemData}
                  />
                  <p className={`item_split item_split-normal`}></p>
               </Fragment>
            :  <></>
      })
   )
}