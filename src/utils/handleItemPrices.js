import React from "react";

export function handleUniquePrice(item, fetchItemData){
    let index = fetchItemData[item.baseInfo.item_category].lines.map((e) => e.name).indexOf(item.name);
    if(index !== -1){
        return [fetchItemData[item.baseInfo.item_category].lines[index]]
    }
}

export function handleBaseTypePrice(item, fetchItemData){
    let itemPrices = fetchItemData.baseType.lines.filter(c => (c.baseType === item.base) && (c.levelRequired >= parseInt(item.iLv)));
    let itemPricesResult = [];
    if(itemPrices.length > 0){
        if(item.influence.length > 0){
            function capitalize(str){return str.charAt(0).toUpperCase() + str.slice(1)};
    
            let allInfluences = [];
            const itemInf = item.influence.map(i => capitalize(i));
            
            itemInf.forEach(i => allInfluences.push(i));
            if(itemInf.length > 1){
                let tempInf = itemInf.flatMap((v, i) => itemInf.slice(i+1).map( w => v + '/' + w ));
                tempInf.map(i => {
                    let tempMods = i.split('/');
                    allInfluences.push(tempMods.join('/'));
                    allInfluences.push(tempMods.reverse().join('/'));
                })
            }
    
            let finalAllInfluence = new Set(allInfluences);
    
            finalAllInfluence.forEach((i) => {
                itemPrices.forEach(p => {if((p.hasOwnProperty('variant')) && (p.variant === i)){itemPricesResult.push(p)}})
            })
    
        }

        let baseItemPrices = itemPrices.filter(r => !r.hasOwnProperty('variant'));
        baseItemPrices.forEach(i => itemPricesResult.push(i));

        if(itemPricesResult.length > 0){
            itemPricesResult.sort(({levelRequired:a}, {levelRequired:b}) => b-a);
            return itemPricesResult
        }
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
        clusterPriceResults.sort(({levelRequired:a}, {levelRequired:b}) => b-a);
        return clusterPriceResults
    }else{
        return null
    }
}

export function displayEstimatedPrice(item){
    if(item !== undefined){
        if(item.divineValue >= 2){
            return (
                <p className="flex flex-row justify-center items-center gap-2 w-fit" data-tooltip={`chaos: ${item.chaosValue} | divine: ${item.divineValue}`} data-tooltip-position="top">
                    <span className="text-lg">{item.divineValue}</span>
                    <img className="w-8" src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png' alt="Divine Orb"/>
                </p>
            )
        }else{
            return(
                <p className="flex flex-row justify-center items-center gap-2 w-fit" data-tooltip={`chaos: ${item.chaosValue} | divine: ${item.divineValue}`} data-tooltip-position="top">
                    <span className="text-lg">{item.chaosValue}</span>
                    <img className="w-8" src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png' alt="Chaos"/>
                </p>
            ) 
        }
    }
}