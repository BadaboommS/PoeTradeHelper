export function addOrder(item, allItems){
    let itemOrder;
    let itemSearch = item.name;
    if(item.rarity !== 'UNIQUE'){
        itemSearch = item.base;
    }
    for(let i = 0, l = allItems.length; i < l; i++){
        for(let j = 0, m = allItems[i].entries.length; j < m; j++){
            if(allItems[i].entries[j].text.includes(itemSearch)){
                itemOrder = allItems[i].id;
                break;
            }
        }
    }
    item.order = itemOrder;
}