export function codeDecompress(code){
    try{
        //Retrieve Code and decode
        const cleanBase64Code = code.replaceAll('-','+').replaceAll('_','/');
        const compressedCode = atob(cleanBase64Code, "base64");
    
        //Inflate code
        const array = Uint8Array.from([...compressedCode].map(v => v.charCodeAt(0)));
        var data = pako.inflate(array);
        var xmlString = String.fromCharCode.apply(null, new Uint16Array(data));
    
        //Parse items into usable array
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const htmlItems = xmlDoc.getElementsByTagName("Item");

        return htmlItems;
    }catch(err){
        return err
    }
}