export function generateTradeUrl(tradeInfluence, tradeDefence, tradeIlv, tradeLinks, tradeCorrupted, tradeImplicits, tradeExplicits, item, league){
    const leagueChoice = league;

    //setup Filters

    //baseQuery
    let itemRarity = 'unique';
    let itemBaseQuery =`,"name":"${item.name}","type":"${item.base}"`;
    let itemCategory = '';
    if(item.rarity !== "UNIQUE"){
      itemRarity = "nonunique";
      itemBaseQuery = `,"type":"${item.base}"`;
    }

    //armour Filter
    let armourFilter =  '';
      
    if(tradeDefence.length > 0){
      let defenceArray = [];
      tradeDefence.map((def)=>{
        let temp;
        switch(def.split(': ')[0]){
          case 'Armour': temp = `"ar":{"min":${def.split(': ')[1]}}`; break;
          case 'Evasion': temp = `"ev":{"min":${def.split(': ')[1]}}`; break;
          case 'Energy Shield': temp =  `"es":{"min":${def.split(': ')[1]}}`; break;
          case 'Ward': temp = `"block":{"min":${def.split(': ')[1]}}`; break;
          default: console.log('Error sur le switch Armour filter !');
          }
          defenceArray.push(temp);
        })
      armourFilter = `,"armour_filters":{"filters":{${defenceArray.join(',')}}}`
    }

    //misc Filter
    let iLvFilter = `"ilvl":{"min":${tradeIlv},"max":100}`;
    let corruptedFilter = '';
    if(tradeCorrupted !== "any"){ corruptedFilter = `,"corrupted":{"option":"${tradeCorrupted}"}` }
    let miscFilter = `"misc_filters":{"filters":{${iLvFilter}${corruptedFilter}}}`;

    //type Filter
    let rarity = `"rarity":{"option":"${itemRarity}"}`;
    let typeFilter = `,"type_filters":{"filters":{${rarity}${itemCategory}}}`
    let socketFilter = `,"socket_filters":{"filters":{"links":{"min":${tradeLinks}}}}`;
    
    //stats Filter
    let tempItemModifiersArray = [];

    if(tradeInfluence[0]){
      tradeInfluence.map(inf => {
        let tempInfFilter = `{"id":"pseudo.pseudo_has_${inf}_influence"}`
        tempItemModifiersArray.push(tempInfFilter);
      })
    };

    tradeImplicits.map((implicit)=> {
      if((implicit.filter !== undefined) && (implicit.filter !== null)){
        let tempModFilter = `{"id":"${implicit.filter}"${implicit.option? `,"value":{"option":${implicit.option}}` : ''}${implicit.value? `,"value":{"min":${implicit.value[0]}${(implicit.value && implicit.precision)? `,"max":${implicit.value[0]}` : ''}}` : ''}, "disabled": ${!implicit.display}}`;
        tempItemModifiersArray.push(tempModFilter);
      }
    });

    tradeExplicits.map((explicit) => {
      if((explicit.filter !== undefined) && (explicit.filter !== null)){
        let tempModFilter = `{"id":"${explicit.filter}"${explicit.option? `,"value":{"option":${explicit.option}}` : ''}${explicit.value? `,"value":{"min":${explicit.value[0]}${(explicit.value && explicit.precision)? `,"max":${explicit.value[0]}` : ''}}` : ''}, "disabled": ${!explicit.display}}`;
        tempItemModifiersArray.push(tempModFilter);
      }
    });
    let statsFilter = `,"stats":[{"type":"and","filters":[${tempItemModifiersArray.join(",")}]}]`;
    
    const urlPOETrade = `https://www.pathofexile.com/trade/search/${leagueChoice}`;
    const query = `?q={"query":{"filters":{${miscFilter}${socketFilter}${armourFilter}${typeFilter}}${itemBaseQuery}${statsFilter},"status":{"option":"online"}},"sort":{"price":"asc"}}`;
    const tempRequest = urlPOETrade + query;

   return encodeURI(tempRequest);
 }