export function findItemBaseType(itemBase, allItemData){
    for(let i = 0, l = allItemData.length; i < l ; i++){
        for(let j = 0, k = allItemData[i].list.length; j < k; j++){
            if(allItemData[i].list[j].list.includes(itemBase)){
                const item_category = allItemData[i].id;
                const base_type = allItemData[i].list[j].base_type;
                const stat_type = allItemData[i].list[j].stat_type? allItemData[i].list[j].stat_type : null;
                const base_query = allItemData[i].list[j].base_query;
                const base_info = {
                    item_category: item_category,
                    base_type: base_type,
                    stat_type: stat_type,
                    base_query: base_query
                }
                return base_info;
            }
        }
    }
}