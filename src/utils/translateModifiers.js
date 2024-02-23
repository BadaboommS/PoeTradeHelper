export function translateModifiers(allModifiers, modArray, type){
    try{
        modArray.map((mod)=>{
            //remove bracket
            let modText;
            let specialMod;
            if(mod.text.includes("}")){
                modText = mod.text.split('}')[1];
                specialMod = (mod.text.split('}')[0]).slice(1);
            }else{
                modText = mod.text;
            }
            const r = /(\d+)/g;
            let modValue = modText.match(r);
            let modId = modText.replaceAll(r,"#");
            let modFilter;
            let modOption;
            
            if(type === 'implicit'){
                //exceptions
                if(modId.includes(':')){
                    let split = modId.split(':');
                    modId = split[0];
                }
                if(modId.includes('Allocates')){
                    modFilter = 'enchant.stat_2954116742';
                    let tempModOption = modId.split('llocates ')[1];
                    let tempOptionId;
                    for(let i = 0, l = allModifiers[4].entries[4].option.options.length; i < l; i++){
                        if(allModifiers[4].entries[4].option.options[i].text.includes(tempModOption)){
                            tempOptionId = allModifiers[4].entries[4].option.options[i].id;
                            break;
                        }
                    }
                    modOption = tempOptionId;
                }
                if(modId.includes('#.#')){
                    //BUG DOESNT REPLACE
                    modId.replace('#.#', "#");
                }

                if(specialMod === 'enchant'){
                    for(let i = 0, l = allModifiers[4].entries.length; i < l; i++){
                        if(allModifiers[4].entries[i].text.includes(modId)){
                            modFilter = allModifiers[4].entries[i].id;
                            break;
                        }
                    }
                }else if(specialMod === 'crafted'){
                    for(let i = 0, l = allModifiers[4].entries.length; i < l; i++){
                        if(allModifiers[4].entries[i].text.includes(modId)){
                            modFilter = allModifiers[4].entries[i].id;
                            break;
                        }
                    }
                    if(modFilter === 'enchant.stat_3948993189'){
                        let tempModOption = modText.split("grant: ")[1];
                        let tempOptionId;
                        for(let i = 0, l = allModifiers[4].entries[1].option.options.length; i < l; i++){
                            if(allModifiers[4].entries[1].option.options[i].text.includes(tempModOption)){
                                tempOptionId = allModifiers[4].entries[1].option.options[i].id;
                                break;
                            }
                        }
                        modValue = '';
                        modOption = tempOptionId;
                    }
                }else{
                    for(let i = 0, l = allModifiers[0].entries.length; i < l; i++){
                        if(allModifiers[0].entries[i].text === modId){
                            modFilter = allModifiers[0].entries[i].id;
                            break;
                        }
                    }
                    if(modFilter === undefined){
                        for(let i = 0, l = allModifiers[0].entries.length; i < l; i++){
                            if(allModifiers[0].entries[i].text.includes(modId)){
                                modFilter = allModifiers[0].entries[i].id;
                                break;
                            }
                        }
                    }
                }
            }
            
            if(type === 'explicit'){
                if(specialMod === 'fractured'){
                    for(let i = 0, l = allModifiers[3].entries.length; i < l; i++){
                        if(allModifiers[3].entries[i].text.includes(modId)){
                            modFilter = allModifiers[3].entries[i].id;
                            break;
                        }
                    }
                }else if(specialMod === 'crafted'){
                    for(let i = 0, l = allModifiers[6].entries.length; i < l; i++){
                        if(allModifiers[6].entries[i].text.includes(modId)){
                            modFilter = allModifiers[6].entries[i].id;
                            break;
                        }
                    }
                }else{
                    for(let i = 0, l = allModifiers[0].entries.length; i < l; i++){
                        if(allModifiers[0].entries[i].text === modId){
                            modFilter = allModifiers[0].entries[i].id;
                            break;
                        }
                    }
                    if(modFilter === undefined){
                        for(let i = 0, l = allModifiers[1].entries.length; i < l; i++){
                            if(allModifiers[1].entries[i].text.includes(modId)){
                                modFilter = allModifiers[1].entries[i].id;
                                break;
                            }
                        }
                    }
                    if(modFilter === undefined){
                        for(let i = 0, l = allModifiers[1].entries.length; i < l; i++){
                            if(allModifiers[1].entries[i].text === modId){
                                modFilter = allModifiers[1].entries[i].id;
                                break;
                            }
                        }
                    }
                    if(modFilter === undefined){
                        for(let i = 0, l = allModifiers[1].entries.length; i < l; i++){
                            if(allModifiers[1].entries[i].text.includes(modId)){
                                modFilter = allModifiers[1].entries[i].id;
                                break;
                            }
                        }
                    }
                }
            }

            mod.filter = modFilter;
            mod.value = modValue;
            mod.option = modOption;
        })
    }catch(err){
        console.log(err);
    }
}