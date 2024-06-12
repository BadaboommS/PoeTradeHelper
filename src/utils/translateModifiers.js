export function translateModifiers(allModifiers, modArray, type){
    try{
        modArray.map((mod)=>{
            //remove bracket
            let label = null;
            let modPreText = null;
            let modFilter = null;
            let modOption = null;

            if(type === "Implicit"){
                switch(true){
                    case (new RegExp("Allocates").test(mod.text)): {
                        modFilter = "enchant.stat_2954116742";
                        modOption = allModifiers[4].entries[4].option.options[allModifiers[4].entries[4].option.options.findIndex(i => i.text = mod.text.split('Allocates ')[1])].id;
                        return null;
                    }
                    case (new RegExp("Small Passive Skills").test(mod.text)): {
                        modFilter = "enchant.stat_3948993189";
                        modOption = allModifiers[4].entries[1].option.options[allModifiers[4].entries[4].option.options.findIndex(i => i.text = mod.text.split(': ')[1])].id;
                        return null;
                    }
                    case (new RegExp("crafted").test(mod.text)): label = "Enchant"; break;
                    default: label = "Implicit";
                }
            }else{
                switch(true){
                    case (new RegExp("crafted").test(mod.text)): label = "Crafted"; break;
                    case (new RegExp("fractured").test(mod.text)): label = "Fractured"; break;
                    default: label = "Explicit";
                }
            }
            //split special if needed
            mod.text.includes("}")? modPreText = mod.text.split('}')[1] : modPreText = mod.text;

            //retrieve mod value and explicit text
            const r = /(\d+)/g;
            let modValue = modPreText.match(r);
            let modText = modPreText.replace(r,"#").replace("-#",'#');

            const filteredAllModifiers = allModifiers.filter(lab => lab.label === label);
            let index = filteredAllModifiers[0].entries.findIndex(i => i.text.replace(r,"#") === modText);
            if(index === -1){
                modText += ' (Local)';
                index = filteredAllModifiers[0].entries.findIndex(i => i.text.replace(r,"#") === modText); 
            }
            if(index !== -1){
                modFilter = filteredAllModifiers[0].entries[index].id;
            }

            //debug
            if(modFilter === null){
                console.log(mod);
                console.log("Mod label: ",label);
                console.log("Mod text before traitment: ", modPreText)
                console.log("Mod text: ",modText);
                console.log('Mod value: ', modValue);
                console.log("Searching in: ",filteredAllModifiers[0].id);
                console.log("Found in index: ",index);
                console.log("Mod Filter: ", modFilter);
                console.log("Mod Options: ", modOption);
            }

            mod.filter = modFilter;
            mod.value = modValue;
            mod.option = modOption;
        })
    }catch(err){
        console.log(err);
    }
}