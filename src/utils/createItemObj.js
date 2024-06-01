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

    //Corrupted
    let itemIsCorrupted = false;
    try{
        if(cleanItemInfoArray[cleanItemInfoArray.length-1] === 'Corrupted'){
            itemIsCorrupted = true;
            cleanItemInfoArray.pop();
        }
    }catch(err){
        console.log("Corruption parse Problem !", err);
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
    let itemBaseInfo;
    let flask = null;
    let abyss = null;

    if(cleanItemInfoArray[0].indexOf('Flask') !== -1){
        itemName = cleanItemInfoArray[0];
        if(cleanItemInfoArray[1].indexOf('Flask' !== -1)){
            cleanItemInfoArray.shift();
        }
        cleanItemInfoArray.shift();
        
        //Base Info
        flask = true;
        itemBaseInfo = findItemBaseType(itemName, allItemData, flask, abyss);
        itemBase = itemBaseInfo.item_base;
    }else if(itemRarity !== "UNIQUE" && cleanItemInfoArray[0].indexOf('Eye Jewel') !== -1){
        itemName = cleanItemInfoArray[0];
        cleanItemInfoArray.shift();
        
        //Base Info
        let abyss = true;
        itemBaseInfo = findItemBaseType(itemName, allItemData, flask, abyss);
        itemBase = itemBaseInfo.item_base;
    }else{
        itemName = cleanItemInfoArray[0];
        itemBase = cleanItemInfoArray[1];
        cleanItemInfoArray.shift();
        cleanItemInfoArray.shift();
        //Base Info
        itemBaseInfo = findItemBaseType(itemBase, allItemData);
    }

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
        if(cleanItemInfoArray[0].includes("Item Level:")){
            itemIlv = cleanItemInfoArray[0].split(": ")[1];
            cleanItemInfoArray.shift();
        }
    }catch(err){
        console.log(err);
    };

    //Item Sockets
    let itemSockets = [];
    try{
        if(cleanItemInfoArray[0].includes("Sockets:")){
            itemSockets = cleanItemInfoArray[0].split(": ")[1].split(/-| /);
            cleanItemInfoArray.shift();
        }
    }catch(err){
        console.log(err)
    }

    //Item Implicit
    let itemImplicitNumber = 0;
    let itemImplicitArray = [];
    try{
        if(cleanItemInfoArray[0].includes("Implicits:")){
                itemImplicitNumber = cleanItemInfoArray[0].split(": ")[1];
                cleanItemInfoArray.shift();
        }
        if(itemImplicitNumber !== 0){
            for(let i = 1; i <= itemImplicitNumber; i++){
                let newImplicit = {
                    text: cleanItemInfoArray[i-1],
                    display: false
                };
                itemImplicitArray.push(newImplicit);
                cleanItemInfoArray.shift();
            }
        };
    }catch(err){
        console.log(err);
    }

    //Item Modifiers
    let itemExplicitsArray = [];
    try{
        while(cleanItemInfoArray.length > 0){
            let newExplicit = {
                text: cleanItemInfoArray[0],
                display: false
            };
            itemExplicitsArray.push(newExplicit);
            cleanItemInfoArray.shift();
        }
    }catch(err){
        console.log(err);
    }
    
    //return new item object
    let newItem = {
        name: itemName,
        base: itemBase,
        baseInfo: itemBaseInfo,
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