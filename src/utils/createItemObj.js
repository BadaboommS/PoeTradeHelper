export function createItemObj(item){
    let itemContent = item.textContent.replace(/\t/g, '');;
    let itemInfoArray = itemContent.split('\n');
    let cleanItemInfoArray = itemInfoArray.filter((str) => str != '');
    //console.log(cleanItemInfoArray);

    //retrieving item info for itemsArray init

    //Item Name & Base
    let itemName = cleanItemInfoArray[1];
    let itemBase;
    try{
        if(itemName.includes("Charm")){
        itemBase = "Charm";
        }else if(itemName.includes("Flask") || itemName.includes("Tincture")){
        let tempBase = itemName.split(' ');
        itemBase = tempBase[1] + ' ' + tempBase[2];
        }else if(itemName.includes('Eye Jewel')){
            itemBase = "Abyss Jewel";
        }else{
        itemBase = cleanItemInfoArray[2];
        }
    }catch(err){
        console.log(err);
    }

    //Item Defences
    let itemDefences = [];
    try{
        cleanItemInfoArray.map((line) => {
            if(line.includes("Armour: ") || line.includes("Energy Shield: ") || line.includes("Evasion: ")|| line.includes("Ward: ")){
                itemDefences.push(line);
            }
        })
    }catch(err){
        console.log(err);
    }

    //Item Rarity
    let itemRarity;
    try{
        if(cleanItemInfoArray[0].includes('Rarity:')){
            itemRarity = cleanItemInfoArray[0].split(': ')[1];
        }else{
            console.log('No rarity!')
        }
        if(itemRarity === "RELIC"){
            itemRarity = 'UNIQUE';
        }
    }catch(err){
        console.log(err);
    }

    //Item Lv
    let itemIlv;
    try{
        cleanItemInfoArray.map((line) => {
            if(line.includes("Item Level:")){
                itemIlv = line.split(": ")[1];
            }
        })
    }catch(err){
        console.log(err);
    };

    //Item Sockets
    let itemSockets = [];
    try{
        cleanItemInfoArray.map((line) => {
            if(line.includes("Sockets:")){
                itemSockets = line.split(": ")[1].split('-');
            }
        })
    }catch(err){
        console.log(err)
    }

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