export function handleExplicitClass(item){
    switch(true){
        case (/{crafted}/i.test(item)): return 'item_crafted';
        case (/{enchanted}/i.test(item)): return 'item_enchanted';
        case (/{fractured}/i.test(item)): return 'item_fractured';
        default: return '';
    }
}