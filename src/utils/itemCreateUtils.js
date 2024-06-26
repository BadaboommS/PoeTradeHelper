function formatItemInfoArray(item){
    let itemContent = item.textContent.replace(/\t/g, '');
    let itemArray = itemContent.split('\n');
    let itemInfoArray = itemArray.filter((str) => str != '');

    // useless lines filter
    let filters = ['BasePercentile:', 'Unique ID:', "LevelReq:", "Quality:", "Requires", "Variant", "Prefix:", "Suffix:", "Limited to:","Cluster Jewel Skill:", "Cluster Jewel Node Count:", "League:", "Crafted:", "Catalyst:", "Radius:"];
    for(const fil of filters){
        itemInfoArray = itemInfoArray.filter((line) => {
            return line.indexOf(fil) === -1;
        })
    }

    // item variant handle and line cleaning
    let itemVariant = [];
    if(item.getAttribute("variant")){
        itemVariant.push(item.getAttribute("variant"));
    }
    if(item.getAttribute("variantAlt")){
        itemVariant.push(item.getAttribute("variantAlt"));
    }
    if(item.getAttribute("variantAlt2")){
        itemVariant.push(item.getAttribute("variantAlt2"));
    }

    // filter only selected variant
    if(itemVariant.length !== 0){
        itemInfoArray = itemInfoArray.filter((line) => {
            if(line.includes("{variant:")){
                let tempVariant = line.split('variant:')[1].split('}')[0];
                if(tempVariant.includes(',')){
                    let tempCheck = false;
                    tempVariant.split(",").forEach((v) => {
                        if(itemVariant.indexOf(v) !== -1){
                            tempCheck = true;
                        }
                    })
                    return tempCheck;
                }
                return itemVariant.indexOf(tempVariant) !== -1;
            }
            return true;
        })
    }

    // remove {}
    itemInfoArray = itemInfoArray.map((line) => {
        if(line.includes("tags:")){
            let replaceString = line.match(/{tags:.*?}/g);
            line = line.replace(replaceString[0], '');
        }
        if(line.includes("variant:")){
            let replaceString = line.match(/{variant:.*?}/g);
            line = line.replace(replaceString[0], '');
        }
        if(line.includes("custom")){
            let replaceString = line.match(/{custom}/g);
            line = line.replace(replaceString[0], '');
        }
        return line
    })

    return itemInfoArray
}

function convertExplicitRangeText(explicit){
    if(explicit.indexOf('range:') !== -1){
        let rangeString = explicit.match(/{range:.*?}/g);
        explicit = explicit.replace(rangeString[0], '');
        
        let rangeValue = rangeString[0].slice(rangeString[0].indexOf(':')+1, rangeString[0].length-1);

        const matches = explicit.match(/(?<=\().+?(?=\))/g);
        for(let i = 0; i < matches.length; i++){
            let splits = matches[i].match(/-/g);
            let minValue = matches[i].split('-')[0];
            let maxValue = matches[i].split('-')[1];
            if(splits.length > 1){
                let tempValue = matches[i].split('-',2).join('-').length;
                minValue = matches[i].substr(0, tempValue);
                maxValue = matches[i].substr(tempValue + 1);
            }
            let value = parseInt(minValue) + parseInt((Math.floor(maxValue-minValue)*rangeValue));
            explicit = explicit.replace(`(${matches[i]})`, value.toString());
        }
    }
    return explicit
}

export function addOrder(buildItemArray){
    let tempBuildItemArray = [];

    let tempArrayWeapons = buildItemArray.filter((item) => item.baseInfo.item_category === "weapons");

    let tempArrayArmour = buildItemArray.filter((item) => item.baseInfo.item_category === "armour");
    tempArrayArmour.sort((a,b) => (a.baseInfo.item_sort < b.baseInfo.item_sort) ? -1 : (a.baseInfo.item_sort > b.baseInfo.item_sort) ? 1 : 0);

    let tempArrayAccessories = buildItemArray.filter((item) => item.baseInfo.item_category === "accessories");
    tempArrayAccessories.sort((a,b) => (a.baseInfo.item_sort < b.baseInfo.item_sort) ? -1 : (a.baseInfo.item_sort > b.baseInfo.item_sort) ? 1 : 0);

    let tempArrayFlask = buildItemArray.filter((item) => item.baseInfo.item_category === "flasks");

    let tempArrayJewel = buildItemArray.filter((item) => item.baseInfo.item_category === "jewels");
    tempArrayJewel.sort((a,b) => (a.baseInfo.item_sort < b.baseInfo.item_sort) ? -1 : (a.baseInfo.item_sort > b.baseInfo.item_sort) ? 1 : 0);

    let tempArrayUndefined = buildItemArray.filter((item) => item.baseInfo.item_category === undefined);

    tempBuildItemArray = [...tempArrayWeapons, ...tempArrayArmour, ...tempArrayAccessories, ...tempArrayFlask, ...tempArrayJewel, ...tempArrayUndefined];
    return tempBuildItemArray;
}

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

export function createItemObj(item, allItemData){

    let cleanItemInfoArray = formatItemInfoArray(item);

    //Corrupted
    let itemIsCorrupted = false;
    if(cleanItemInfoArray[cleanItemInfoArray.length-1] === 'Corrupted'){
        itemIsCorrupted = true;
        cleanItemInfoArray.pop();
    }

    //Item Rarity
    let itemRarity;
    if((cleanItemInfoArray[0].indexOf('Rarity:')) !== -1){
        itemRarity = cleanItemInfoArray[0].split(': ')[1];
        cleanItemInfoArray.shift();
    }else if(itemRarity === "RELIC"){
        itemRarity = 'UNIQUE';
    }

    //Item Name & Base
    let itemName;
    let itemBase;
    let itemBaseInfo;
    let flask = null;
    let abyss = null;

    if(cleanItemInfoArray[0].indexOf('Flask') !== -1){
        itemName = cleanItemInfoArray[0];
        cleanItemInfoArray.shift();
        if(cleanItemInfoArray[0].indexOf('Flask') !== -1){
            cleanItemInfoArray.shift();
        }
        
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
        if(cleanItemInfoArray[1].includes("Implicits:") || cleanItemInfoArray[1].includes("Sockets:") || cleanItemInfoArray[1].includes("Armour:") || cleanItemInfoArray[1].includes("Evasion:") || cleanItemInfoArray[1].includes("Energy Shield:")|| cleanItemInfoArray[1].includes("Item Level:")){
            itemName = null;
            itemBase = cleanItemInfoArray[0];
            if(itemBase.includes("Jewel")){
                itemBase = itemBase.split(' ')[1] + " " + itemBase.split(' ')[2];
            }
        }else{
            itemName = cleanItemInfoArray[0];
            itemBase = cleanItemInfoArray[1];
            cleanItemInfoArray.shift();
        }
        cleanItemInfoArray.shift();
        //Base Info
        itemBaseInfo = findItemBaseType(itemBase, allItemData);
    }

    //Item Defences
    let itemDefences = [];
    cleanItemInfoArray.map((line, i) => {
        if(line.includes("Armour: ") || line.includes("Energy Shield: ") || line.includes("Evasion: ")|| line.includes("Ward: ")){
            itemDefences.push(line);
        }
    })
    for(let i = 0, l = itemDefences.length; i < l; i++){
        cleanItemInfoArray.shift();
    }

    //Item Influences
    let itemInfluences = [];
    while((cleanItemInfoArray[0].indexOf(' Item')) !== -1){
        itemInfluences.push(cleanItemInfoArray[0].split(" Item")[0]);
        cleanItemInfoArray.shift();
    }

    //Item Lv
    let itemIlv = null;
    if((cleanItemInfoArray[0].indexOf("Item Level:")) !== -1){
        itemIlv = cleanItemInfoArray[0].split(": ")[1];
        cleanItemInfoArray.shift();
    }

    //Item Sockets
    let itemSockets = [];
    if((cleanItemInfoArray[0].indexOf("Sockets:")) !== -1){
        itemSockets = cleanItemInfoArray[0].split(": ")[1].split(/-| /);
        cleanItemInfoArray.shift();
    }

    //Item Implicit
    let itemImplicitNumber = 0;
    let itemImplicitArray = [];
    if((cleanItemInfoArray[0].indexOf("Implicits:")) !== -1){
            itemImplicitNumber = cleanItemInfoArray[0].split(": ")[1];
            cleanItemInfoArray.shift();
    }else{
        cleanItemInfoArray.shift();
        itemImplicitNumber = cleanItemInfoArray[0].split(": ")[1];
        cleanItemInfoArray.shift();
    }
    if(itemImplicitNumber !== 0){
        for(let i = 0; i < itemImplicitNumber; i++){
            let newImplicit = {
                text: convertExplicitRangeText(cleanItemInfoArray[0]),
                display: false,
                precision: false
            };
            itemImplicitArray.push(newImplicit);
            cleanItemInfoArray.shift();
        }
    };
    
    //Item Modifiers
    let itemExplicitsArray = [];
    while(cleanItemInfoArray.length > 0){
        let newExplicit = {
            text: convertExplicitRangeText(cleanItemInfoArray[0]),
            display: false,
            precision: false
        };
        itemExplicitsArray.push(newExplicit);
        cleanItemInfoArray.shift();
    }
    
    //return new item object
    let newItem = {
        name: itemName,
        base: itemBase,
        baseInfo: itemBaseInfo,
        influence: itemInfluences,
        defence: itemDefences,
        rarity: itemRarity,
        iLv: itemIlv,
        sockets : itemSockets,
        implicits: itemImplicitArray,
        explicits: itemExplicitsArray,
        corrupted: itemIsCorrupted
    }
    console.log(newItem);
    return newItem
}

export function translateModifiers(item, allModifiers, modArray, type){
    try{
        modArray.map((mod)=>{
            //remove bracket
            let label = null;
            let modPreText = null;
            let modFilter = null;
            let modOption = null;

            if(type === "Implicit"){
                switch(true){
                    case (/Allocates/.test(mod.text)): {
                        mod.filter = "enchant.stat_2954116742";
                        mod.option = allModifiers[4].entries[4].option.options[allModifiers[4].entries[4].option.options.findIndex(i => i.text === mod.text.split('Allocates ')[1])].id;
                        return null;
                    }
                    case (/Small Passive Skills/.test(mod.text)): {
                        mod.filter = "enchant.stat_3948993189";
                        mod.option = allModifiers[4].entries[1].option.options[allModifiers[4].entries[1].option.options.findIndex(i => i.text === mod.text.split(': ')[1])].id;
                        return null;
                    }
                    case (/crafted/.test(mod.text)): label = "Enchant"; break;
                    default: label = "Implicit";
                }
            }else{
                switch(true){
                    case (/Forbidden Flesh/.test(mod.text)): {
                        mod.filter = "explicit.stat_1190333629";
                        mod.option = allModifiers[1].entries[1549].option.options[allModifiers[1].entries[1549].option.options.findIndex(i => i.text === mod.text.split('Allocates ')[1].split(" if")[0])].id;
                        return null;
                    }
                    case (/Forbidden Flame/.test(mod.text)): {
                        mod.filter = "explicit.stat_2460506030";
                        mod.option = allModifiers[1].entries[981].option.options[allModifiers[1].entries[1549].option.options.findIndex(i => i.text === mod.text.split('Allocates ')[1].split(" if")[0])].id;
                        return null;
                    }
                    case (/Passives in radius of/.test(mod.text)): {
                        mod.filter = "explicit.stat_2422708892";
                        mod.option = allModifiers[1].entries[1894].option.options[allModifiers[1].entries[1894].option.options.findIndex(i => i.text === mod.text.split('of ')[1].split(" can")[0])].id;
                       return null;
                    }
                    case (/Only affects Passives in/.test(mod.text)): {
                        mod.filter = "explicit.stat_3642528642";
                        mod.option = allModifiers[1].entries[906].option.options[allModifiers[1].entries[906].option.options.findIndex(i => i.text === mod.text.split('in ')[1].split(" Ring")[0])].id;
                        return null;
                    }
                    case (/crafted/.test(mod.text)): label = "Crafted"; break;
                    case (/fractured/.test(mod.text)): label = "Fractured"; break;
                    default: label = "Explicit";
                }
            }
            //split special if needed
            /}/.test(mod.text)? modPreText = mod.text.split('}')[1] : modPreText = mod.text;

            //retrieve mod value and explicit text
            const r = /-?(\d+)/g;
            let modValue = modPreText.match(r);
            let modText = modPreText.replace(r,"#").replaceAll('#.#', '#').replaceAll("##", "#").replaceAll('#-#', '#').replaceAll("(#)", '#').replaceAll('+#', "#").replaceAll('-#', '#').trimStart();

            //exceptions
            const filteredAllModifiers = allModifiers.filter(lab => lab.label === label);
            let index = filteredAllModifiers[0].entries.findIndex(i => i.text.replace(r,"#") === modText);
            if(index === -1){
                if(/Total Mana Cost/.test(modText)){
                    modText = modText.replace("# to", "+# to");
                }else if(/Small Passive Skill which grants nothing/.test(modText)){
                    modText = modText.replace("Skill which grants", "Skills which grant");
                }else if(/reduced/.test(modText)){
                    modText = modText.replace("reduced", "increased");
                    modValue = modValue.map(v => '-' + v);
                }else if(/Devotion/.test(modText)){
                    modText = modText.replace("# Devotion", "10 Devotion");
                    modValue.pop();
                }else if(/Charges/.test(modText)){
                    modText = modText.replace("Charges", "Charge");
                }else if(/to all Elemental Resistances/.test(modText)){
                    modText = modText.replace("#", "+#");
                    modValue = modValue.map(v => '-' + v);
                }else{
                    modText += ' (Local)';
                }
                index = filteredAllModifiers[0].entries.findIndex(i => i.text.replace(r,"#") === modText); 
            }
            if(index !== -1){
                modFilter = filteredAllModifiers[0].entries[index].id;
                if((item.rarity !== "UNIQUE") && ("influence" in filteredAllModifiers[0].entries[index])){
                    if(filteredAllModifiers[0].entries[index].influence.length < 3){
                        console.log(filteredAllModifiers[0].entries[index].influence);
                        filteredAllModifiers[0].entries[index].influence.forEach((inf) => item.influence.push(inf))
                    }
                }
            }

            //debug
            /* if(modFilter === null){
                console.log(mod);
                console.log("Mod label: ",label);
                console.log("Mod text before traitment: ", modPreText)
                console.log('Mod value: ', modValue);
                console.log("Searching in: ",filteredAllModifiers[0].id);
                console.log("Found in index: ",index);
                console.log("Mod Filter: ", modFilter);
                console.log("Mod Options: ", modOption);
            } */

            mod.filter = modFilter;
            mod.value = modValue;
            mod.option = modOption;
        })
    }catch(err){
        console.log(err);
    }
}