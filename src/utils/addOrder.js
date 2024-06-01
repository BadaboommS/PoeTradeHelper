import { dynamicSort } from "./dynamicSort";

export function addOrder(buildItemArray){
    let tempArrayWeapons = buildItemArray.filter((item) => item.baseInfo.item_category === "weapons");
    let tempArrayArmour = buildItemArray.filter((item) => item.baseInfo.item_category === "armour");
    tempArrayArmour.sort(dynamicSort('baseInfo','item_sort'));
    let tempArrayAccessories = buildItemArray.filter((item) => item.baseInfo.item_category === "accessories");
    tempArrayAccessories.sort(dynamicSort('baseInfo','item_sort'));
    let tempArrayFlask = buildItemArray.filter((item) => item.baseInfo.item_category === "flasks");
    let tempArrayJewel = buildItemArray.filter((item) => item.baseInfo.item_category === "jewels");
    tempArrayJewel.sort(dynamicSort('baseInfo','item_sort'));
    let tempArrayUndefined = buildItemArray.filter((item) => item.baseInfo.item_category === undefined);

    return [...tempArrayWeapons, ...tempArrayArmour, ...tempArrayAccessories, ...tempArrayFlask, ...tempArrayJewel, ...tempArrayUndefined];
}