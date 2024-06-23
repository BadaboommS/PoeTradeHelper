import React from "react";

export function handleUniquePrice(item, fetchItemData){
    let index = fetchItemData[item.baseInfo.item_category].lines.map((e) => e.name).indexOf(item.name);
    if(index !== -1){
        return [fetchItemData[item.baseInfo.item_category].lines[index]]
    }
}

export function handleBaseTypePrice(item, fetchItemData){
    let itemPriceResults = fetchItemData.baseType.lines.filter(c => (c.baseType === item.base) && (c.levelRequired >= parseInt(item.iLv)));
    if(itemPriceResults.length !== 0){
        return itemPriceResults
    }
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
    if(clusterPriceResults.length >= 1){
        return clusterPriceResults
    }else{
        return null
    }
}

export function displayEstimatedPrice(item){
    if(item !== undefined){
        if(item.divineValue > 2){
            return (
                <p className="flex flex-row justify-center items-center text-2xl gap-2" data-tooltip={`chaos: ${item.chaosValue} | divine: ${item.divineValue}`} data-tooltip-position="top">
                    {item.divineValue}
                    <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png' alt="Divine Orb"/>
                </p>
            )
        }else{
            return(
                <p className="flex flex-row justify-center items-center text-2xl gap-2" data-tooltip={`chaos: ${item.chaosValue} | divine: ${item.divineValue}`} data-tooltip-position="top">
                    {item.chaosValue}
                    <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png' alt="Chaos"/>
                </p>
            ) 
        }
    }
}