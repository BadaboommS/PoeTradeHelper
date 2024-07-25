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

function formatExplicit(explicit){
    const r = /-?(\d+)/g;
    const modValue = explicit.match(r);
    const modText = explicit.replace(r,"#")
            .replaceAll('#.#', '#')
            .replaceAll("##", "#")
            .replaceAll('#-#', '#')
            .replaceAll("(#)", '#')
            .replaceAll('+#', "#")
            .replaceAll('-#', '#')
            .trimStart();
    return {modValue, modText}
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
    try{
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
    }catch(err){
        console.log(err);
        console.log(itemBase);
        const err_base_info = {
            item_category: undefined,
            item_sort: undefined,
            base_type: undefined,
            stat_type: undefined,
            base_query: undefined
        }
        return err_base_info;
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
        if(/Implicits:|Sockets:|Armour:|Evasion:|Energy Shield:|Item Level:/.test(cleanItemInfoArray[1])){
            itemName = null;
            itemBase = cleanItemInfoArray[0];
            if(itemBase.includes("Jewel")){
                let jewelType = itemBase.split(' Jewel')[0].split(' ').pop()
                itemBase = jewelType + " Jewel";
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
    return newItem
}

export function translateModifiersRare(item, allItemTypes, allModifiers){
    let modArray = item.explicits;
    const itemCategoryIndex = allItemTypes.findIndex(x => x.id === item.baseInfo.item_category);
    const itemBaseTypeIndex = allItemTypes[itemCategoryIndex].list.findIndex(x => (x.base_type === item.baseInfo.base_type) && (item.baseInfo.stat_type !== null? x.stat_type === item.baseInfo.stat_type : true));

    modArray.map((mod) => {
        let specialMod = null;
        let modPreText = null;
        let modFilter = null;
        let modInfluence = null;
        let modOption = null;

        //split special if needed
        switch(true){
            case(mod.text.includes('{crafted}')): specialMod = 'crafted'; modPreText = mod.text.split('}')[1]; break;
            case(mod.text.includes('{fractured}')): specialMod = 'fractured'; modPreText = mod.text.split('}')[1]; break;
            default: modPreText = mod.text;
        }

        //retrieve mod value and explicit text
        let { modValue, modText } = formatExplicit(modPreText);

        let index = null;
        const targetedExplicitArr = allItemTypes[itemCategoryIndex].list[itemBaseTypeIndex].explicits;
        
        if(specialMod === "fractured"){
            modInfluence = "fractured";
            index = allItemTypes[5].affixes.findIndex(x => x.text === modText);
            if(index === -1){ 
                modFilter += ' (Local)';
                index = allItemTypes[5].affixes.findIndex(x => x.text === modText);
            }
            if(index !== -1){ modFilter = allItemTypes[5].affixes[index].id }else{ modFilter = null };
            
        }else if(specialMod === "crafted"){
            modInfluence = "crafted";
            index = targetedExplicitArr[9].affixes.findIndex(x => x.text === modText);
            if(index === -1){ 
                modText += ' (Local)';
                index = targetedExplicitArr[9].affixes.findIndex(x => x.text === modText);
            }
            if(index !== -1){ modFilter = targetedExplicitArr[9].affixes[index].trade }else{ modFilter = null };
        }else{
            for(let i = 0; i < targetedExplicitArr.length; i++){
                index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
                if(index !== -1){
                    modFilter = targetedExplicitArr[i].affixes[index].trade
                    modInfluence = targetedExplicitArr[i].types;
                    break;
                }
            }           
            if(index === -1 ){
                if(modText.includes('reduced')){
                    modText = modText.replace('reduced', 'increased')
                    for(let i = 0; i < targetedExplicitArr.length; i++){
                        index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
                        if(index !== -1){
                            modFilter = targetedExplicitArr[i].affixes[index].trade
                            modInfluence = targetedExplicitArr[i].types;
                            break;
                        }
                    }
                }else if(modText.includes('less')){
                    modText = modText .replace('less', 'more')
                    for(let i = 0; i < targetedExplicitArr.length; i++){
                        index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
                        if(index !== -1){
                            modFilter = targetedExplicitArr[i].affixes[index].trade
                            modInfluence = targetedExplicitArr[i].types;
                            break;
                        }
                    }
                }else{
                    modText += ' (Local)';
                    for(let i = 0; i < targetedExplicitArr.length; i++){
                        index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
                        if(index !== -1){
                            modFilter = targetedExplicitArr[i].affixes[index].trade
                            modInfluence = targetedExplicitArr[i].types;
                            break;
                        }
                    }
                } 
            }
        }
        
        if(index === -1){
            translateModifiers([mod], allModifiers, 'Explicit');
        }else{
            if(!mod.hasOwnProperty('influence')){ mod.influence = modInfluence }
            if(!mod.hasOwnProperty('filter')){ mod.filter = modFilter }
            if(!mod.hasOwnProperty('value')){ mod.value = modValue }
            if(!mod.hasOwnProperty('option')){ mod.option = modOption }
        }
    })
}

export function translateModifiers(modArray, allModifiers, type){
    modArray.map((mod) =>{
        //remove bracket
        let label = null;
        let modPreText = null;
        let modFilter = null;
        let modOption = null;

        if(type === "implicit"){
            switch(true){
                case (/Allocates/.test(mod.text)): {
                    mod.filter = "enchant.stat_2954116742";
                    mod.option = allModifiers[4].entries[4].option.options[allModifiers[4].entries[4].option.options.findIndex(i => i.text === mod.text.split('Allocates ')[1])].id;
                    return null;
                }
                case (/Small Passive Skills/.test(mod.text)): {
                    mod.filter = "enchant.stat_3948993189";
                    mod.option = allModifiers[4].entries[1].option.options[allModifiers[4].entries[1].option.options.findIndex(i => i.text === mod.text.split('grant: ')[1])].id;
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
                case (/Passives in Radius of/.test(mod.text)): {
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
        }

        //debug
        /* if(modFilter === null){
            console.log(mod);
            console.log("Mod label: ",label);
            console.log("Mod text before traitment: ", modPreText);
            console.log("Mod text after traitment: ", modText)
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
}

export function handleInfluenceExplicits(item, allItemTypes){
    let filteredInfArray = item.explicits.filter(m => /hunter|shaper|crusader|warlord|elder|redeemer/.test(m.influence))
    let tempInfArr = [];
    let resultInf = [];

    const itemCategoryIndex = allItemTypes.findIndex(x => x.id === item.baseInfo.item_category);
    const itemBaseTypeIndex = allItemTypes[itemCategoryIndex].list.findIndex(x => (x.base_type === item.baseInfo.base_type) && (item.baseInfo.stat_type !== null? x.stat_type === item.baseInfo.stat_type : true));
    const targetedExplicitArr = allItemTypes[itemCategoryIndex].list[itemBaseTypeIndex].explicits;

    filteredInfArray.forEach((mod) => {
        let { modText } = formatExplicit(mod.text);
        let tempInf = []
        let index = null;

        for(let i = 0; i < targetedExplicitArr.length; i++){
            index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
            if(index !== -1){ tempInf.push(targetedExplicitArr[i].types) }
        }           
        if(index === -1 ){
            if(modText.includes('reduced')){
                modText = modText.replace('reduced', 'increased')
                for(let i = 0; i < targetedExplicitArr.length; i++){
                    index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
                    if(index !== -1){ tempInf.push(targetedExplicitArr[i].types) }
                }
            }else if(modText.includes('less')){
                modText = modText .replace('less', 'more')
                for(let i = 0; i < targetedExplicitArr.length; i++){
                    index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
                    if(index !== -1){ tempInf.push(targetedExplicitArr[i].types) }
                }
            }else{
                modText += ' (Local)';
                for(let i = 0; i < targetedExplicitArr.length; i++){
                    index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
                    if(index !== -1){ tempInf.push(targetedExplicitArr[i].types) }
                }
            } 
        }
        tempInfArr.push(tempInf)
    })
    tempInfArr = tempInfArr.map(inf => { return inf.filter(i => /hunter|shaper|crusader|warlord|elder|redeemer/.test(i)) });

    tempInfArr.forEach((inf) => {
        if(inf.length === 1){
            resultInf.push(inf[0])
        }
    })
    if((resultInf.length > 0) && (resultInf.length < 3)){
        resultInf.forEach(i => item.influence.push(i));
    }
}