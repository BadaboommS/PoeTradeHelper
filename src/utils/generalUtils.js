export async function fetchData(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
 }

export function codeDecompress(code){
    try{
        //Retrieve Code and decode
        const cleanBase64Code = code.replaceAll('-','+').replaceAll('_','/');
        const compressedCode = atob(cleanBase64Code, "base64");
    
        //Inflate code
        const inputArray = Uint8Array.from([...compressedCode].map(v => v.charCodeAt(0)));
        var data = pako.inflate(inputArray, { to: 'string'});
    
        //Parse items into usable array
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const htmlItems = xmlDoc.getElementsByTagName("Item");

        return htmlItems;
    }catch(err){
        return err
    }
}

export function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

export function handleExplicitClass(item){
    switch(true){
        case (/{crafted}/i.test(item)): return 'item_crafted';
        case (/{enchanted}/i.test(item)): return 'item_enchanted';
        case (/{fractured}/i.test(item)): return 'item_fractured';
        default: return '';
    }
}
