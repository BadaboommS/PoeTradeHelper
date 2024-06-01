import { findItemBaseType } from "./findItemBaseType";

export function createItemObj(item, allItemData){
    let itemContent = item.textContent.replace(/\t/g, '');
    let itemInfoArray = itemContent.split('\n');
    let cleanItemInfoArray = itemInfoArray.filter((str) => str != '');
    
    // useless lines filter
    let filters = ['BasePercentile:', 'Unique ID:', "LevelReq:", "Quality:", "Requires"];
    for(const fil of filters){
        cleanItemInfoArray = cleanItemInfoArray.filter((line) => {
            return line.indexOf(fil) === -1;
        })
    }

    //Item Rarity
    let itemRarity;
    try{
        if(cleanItemInfoArray[0].includes('Rarity:')){
            itemRarity = cleanItemInfoArray[0].split(': ')[1];
            cleanItemInfoArray.shift();
        }else if(itemRarity === "RELIC"){
            itemRarity = 'UNIQUE';
        }
    }catch(err){
        console.log("Rarity parse Problem ! ", err);
    }

    //Item Name & Base
    let itemName;
    let itemBase;

    if(cleanItemInfoArray[0].indexOf('Flask') !== -1){
        itemName = cleanItemInfoArray[0];
        itemBase = 'flask';
        cleanItemInfoArray.shift();
    }else{
        itemName = cleanItemInfoArray[0];
        itemBase = cleanItemInfoArray[1];
        cleanItemInfoArray.shift();
        cleanItemInfoArray.shift();
    }

    //Base Info
    let base_info = findItemBaseType(itemBase, allItemData);

    //Item Defences
    let itemDefences = [];
    try{
        cleanItemInfoArray.map((line, i) => {
            if(line.includes("Armour: ") || line.includes("Energy Shield: ") || line.includes("Evasion: ")|| line.includes("Ward: ")){
                itemDefences.push(line);
            }
        })
        for(let i = 0, l = itemDefences.length; i < l; i++){
            cleanItemInfoArray.shift();
        }
    }catch(err){
        console.log(err);
    }

    //Item Lv
    let itemIlv = null;
    try{
        cleanItemInfoArray.map((line) => {
            if(line.includes("Item Level:")){
                itemIlv = line.split(": ")[1];
            }
        })
        if(itemIlv !== null){
            cleanItemInfoArray.shift();
        }
    }catch(err){
        console.log(err);
    };

    //Item Sockets
    let itemSockets = [];
    try{
        cleanItemInfoArray.map((line) => {
            if(line.includes("Sockets:")){
                itemSockets = line.split(": ")[1].split(/-| /);
            }
        })
        if(itemSockets.length > 0){
            cleanItemInfoArray.shift();
        }
    }catch(err){
        console.log(err)
    }
    console.log(cleanItemInfoArray);

    //Item Implicit
    let itemImplicitNumber = 0;
    let itemImplicitIndex;
    let itemImplicitArray = [];
    try{
        cleanItemInfoArray.map((line, i) => {
            if(line.includes("Implicits:")){
                itemImplicitNumber = line.split(": ")[1];
                itemImplicitIndex = i;
            }
        });
        if(itemImplicitNumber !== 0){
            for(let i = 1; i <= itemImplicitNumber; i++){
                let newImplicit = {
                    text: cleanItemInfoArray[itemImplicitIndex+i],
                    display: false
                };
                itemImplicitArray.push(newImplicit);
            }
        };
    }catch(err){
        console.log(err);
    }

    //Item Modifiers
    let itemExplicitsArray = [];
    let itemIsCorrupted = false;
    try{
        for(let i = (itemImplicitIndex+itemImplicitArray.length+1); i < cleanItemInfoArray.length; i++){
            if(cleanItemInfoArray[i].includes("Corrupted")){
                itemIsCorrupted = true;
            }else{
                let newExplicit = {
                    text: cleanItemInfoArray[i],
                    display: false
                };
                itemExplicitsArray.push(newExplicit);
            };
        };
    }catch(err){
        console.log(err);
    }
    
    //return new item object
    let newItem = {
        name: itemName,
        base: itemBase,
        base_info: base_info,
        defence: itemDefences,
        rarity: itemRarity,
        iLv: itemIlv,
        sockets : itemSockets,
        implicits: itemImplicitArray,
        explicits: itemExplicitsArray,
        corrupted: itemIsCorrupted
    }
    return newItem
}