export function handleUniquePrice(item, fetchItemData){
    let index = fetchItemData[item.baseInfo.item_category].lines.map((e) => e.name).indexOf(item.name);
    if(index !== -1){
        const chaos = fetchItemData[item.baseInfo.item_category].lines[index].chaosValue;
        const divine = fetchItemData[item.baseInfo.item_category].lines[index].divineValue;
        return { chaos, divine };
    }
}

export function handleBaseType(item, fetchItemData){
    console.log("Rare Item --------");
    let itemPriceResults = fetchItemData.baseType.lines.filter(c => (c.baseType === item.base) && (c.levelRequired >= parseInt(item.iLv)));
    console.log(itemPriceResults);
}

export function handleClusterPrice(item, clusterData){
    const clusterFilterPassiveFilter = item.implicits.filter(i => i.text.includes("Small Passive Skills"))[0].text.split(': ')[1];
    const clusterFilterNbPassive = item.implicits.filter(i => i.text.includes("Adds"))[0].text.split("Adds ")[1].split(" Passive")[0];
    let clusterFilterIlv = parseInt(item.iLv);

    let clusterPriceResults = clusterData.filter(c => (c.baseType === item.base) && (c.name === clusterFilterPassiveFilter) && (c.variant === `${clusterFilterNbPassive} passives`));
    const clusterBreakpoints = [1,50,68,75,84];
    if(!(clusterBreakpoints.includes(clusterFilterIlv))){
        let tempIlv = null;
        clusterBreakpoints.forEach(b => { if(clusterFilterIlv > b){ tempIlv = b } })
        clusterFilterIlv = tempIlv;
    }
    clusterPriceResults = clusterPriceResults.filter(c => c.levelRequired === clusterFilterIlv);
    if(clusterPriceResults.length === 1){
        let chaos = clusterPriceResults[0].chaosValue;
        let divine = clusterPriceResults[0].divineValue;
        return { chaos, divine };
    }else{
        return null
    }
}