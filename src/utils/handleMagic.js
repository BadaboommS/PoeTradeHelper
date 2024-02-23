export function handleMagic(item, allItems){
    let itemOrder;
    let itemBase;
    if(item.rarity === "MAGIC"){
        for(let i = 0, l = allItems.length; i < l; i++){
            for(let j = 0, m = allItems[i].entries.length; j < m; j++){
                if(allItems[i].entries[j].text.includes(item.name) || item.name.includes(allItems[i].entries[j].text)){
                    itemOrder = allItems[i].id;
                    itemBase = allItems[i].entries[j].type;
                    break;
                }
            }
        }
        if(itemOrder !== undefined){
            item.base = itemBase;
            item.order = itemOrder;
        }
    }
}