export async function fetchData(url){
    const data = await fetch(url);
    const dataJson = await data.json();
    const dataResult = await dataJson.result;
    return await dataResult;
 }