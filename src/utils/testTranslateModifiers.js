export function testTranslateModifiers(allModifiers, modArray, type){
    try{
        modArray.map((mod)=>{
            //remove bracket
            let label = null;
            if(type = "Implicit"){
                switch(true){
                    case (/{crafted}/i.test(mod.text)): label = "Enchant"; break;
                    default: label = "Implicit";
                }
            }else{
                switch(true){
                    case (/{crafted}/i.test(mod.text)): label = "crafted"; break;
                    case (/{fractured}/i.test(mod.text)): label = "Fractured"; break;
                    default: label = "Explicit";
                }
            }
            console.log(mod);
            console.log(label);
        })
    }catch(err){
        console.log(err);
    }
}