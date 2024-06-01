export function addOrder(buildItemArray){
    let tempBuildItemArray = [];

    let tempArrayWeapons = buildItemArray.filter((item) => item.baseInfo.item_category === "weapons");

    let tempArrayArmour = buildItemArray.filter((item) => item.baseInfo.item_category === "armour");
    tempArrayArmour.sort((a,b) => (a.baseInfo.item_sort < b.baseInfo.item_sort) ? -1 : (a.baseInfo.item_sort > b.baseInfo.item_sort) ? 1 : 0);

    let tempArrayAccessories = buildItemArray.filter((item) => item.baseInfo.item_category === "accessories");
    tempArrayAccessories.sort((a,b) => (a.baseInfo.item_sort < b.baseInfo.item_sort) ? -1 : (a.baseInfo.item_sort > b.baseInfo.item_sort) ? 1 : 0);

    let tempArrayFlask = buildItemArray.filter((item) => item.baseInfo.item_category === "flasks");

    let tempArrayJewel = buildItemArray.filter((item) => item.baseInfo.item_category === "jewels");
    tempArrayJewel.sort((a,b) => (a.baseInfo.item_sort < b.baseInfo.item_sort) ? -1 : (a.baseInfo.item_sort > b.baseInfo.item_sort) ? 1 : 0);

    let tempArrayUndefined = buildItemArray.filter((item) => item.baseInfo.item_category === undefined);

    tempBuildItemArray = [...tempArrayWeapons, ...tempArrayArmour, ...tempArrayAccessories, ...tempArrayFlask, ...tempArrayJewel, ...tempArrayUndefined];
    return tempBuildItemArray;
}