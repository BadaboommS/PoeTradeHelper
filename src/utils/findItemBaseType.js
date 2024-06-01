export function findItemBaseType(itemBase, allItemData, flask, jewel){
    if(flask === true){
        for(let i = 0, l = allItemData[3].list[0].list.length; i < l; i++){
            if(itemBase.includes(allItemData[3].list[0].list[i])){
                const item_base = allItemData[3].list[0].list[i];
                const item_sort = allItemData[3].list[0].sort_priority? allItemData[3].list[0].sort_priority : null;
                const item_category = "flasks";
                const base_type = "Flask";
                const base_query = "flask";
                const base_info = {
                    item_base: item_base,
                    item_sort: item_sort,
                    item_category: item_category,
                    base_type: base_type,
                    base_query: base_query
                }
                return base_info;
            }
        }
    }else if(jewel === true){
        for(let i = 0, l = allItemData[4].list[2].list.length; i < l; i++){
            if(itemBase.includes(allItemData[4].list[2].list[i])){
                const item_base = allItemData[4].list[2].list[i];
                const item_sort = allItemData[4].list[2].sort_priority? allItemData[4].list[2].sort_priority : null;
                const item_category = "jewels";
                const base_type = "Abyss Jewel";
                const base_query = "jewel.abyss";
                const base_info = {
                    item_base: item_base,
                    item_sort: item_sort,
                    item_category: item_category,
                    base_type: base_type,
                    base_query: base_query
                }
                return base_info;
            }
        }
    }else{
        for(let i = 0, l = allItemData.length; i < l ; i++){
            for(let j = 0, k = allItemData[i].list.length; j < k; j++){
                if(allItemData[i].list[j].list.includes(itemBase)){
                    const item_category = allItemData[i].id;
                    const item_sort = allItemData[i].list[j].sort_priority? allItemData[i].list[j].sort_priority : null;
                    const base_type = allItemData[i].list[j].base_type;
                    const stat_type = allItemData[i].list[j].stat_type? allItemData[i].list[j].stat_type : null;
                    const base_query = allItemData[i].list[j].base_query;
                    const base_info = {
                        item_category: item_category,
                        item_sort: item_sort,
                        base_type: base_type,
                        stat_type: stat_type,
                        base_query: base_query
                    }
                    return base_info;
                }
            }
        }
    }
}