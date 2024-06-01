import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//utils
import { isIterable } from './utils/isIterable';
import { codeDecompress } from './utils/codeDecompress';
import { createItemObj } from './utils/createItemObj';
import { fetchData } from './utils/fetchData';
import { translateModifiers } from './utils/translateModifiers';
import { addOrder } from './utils/addOrder';
//components
import ItemFeed from './components/ItemFeed';

//init
let buildItemArray = [];
let leagueChoice = "Standard";

//styledComponents
const StyledSplit = styled.p`
    margin: 1rem auto;
`

export function App() {
   const [inputError, setInputError] = useState(false);
   const [reload, setReload] = useState(false);
   const [loader, setLoader] = useState(false);

   let allModifiers;
   let allItems;
   let allItemData;
   
   const handleFetchData = async () => {
      allModifiers = await fetchData('./item_mods/allModifiers.json');
      allItems = await fetchData('./item_mods/allItems.json');
      allItemData = await fetchData('./item_mods/allItemTypes.json');
   }
   handleFetchData();

   function handleSubmit(event){
      buildItemArray = [];
      setInputError(false);
      setLoader(true);
      event.preventDefault();

      //retrieve league choice
      let e = document.getElementById("leagueSelect");
      leagueChoice = e.value;

      //Retrieve Code and decode
      const code = event.target.importCode.value;
      const htmlItems = codeDecompress(code);
      if((!isIterable(htmlItems)) || (htmlItems[0].textContent === undefined)){
         setInputError(true);
         setLoader(false);
         setReload(true);
         return
      }
      
      //Create item obj for each item
      let tempItemArray = [];
      for (let i of htmlItems){
         let tempItem = createItemObj(i, allItemData);
         tempItemArray.push(tempItem);
      }
      
      //Translate mods for filter
      tempItemArray.map((item) => {
         translateModifiers(allModifiers, item.implicits, 'implicit');
         translateModifiers(allModifiers, item.explicits, 'explicit');
      })
      buildItemArray = addOrder(tempItemArray);
      
      setTimeout(() => {
         setLoader(false);
         setReload(true);
      }, 500);
   };

   useEffect(()=>{
      //console.log('render');
      setReload(false);
   }, [reload]);

   return (
      <div>
         <div>
            <h1 className='text-white text-center'>POE Build Trade Helper</h1>
            <p className='text-white text-center'>Put build import code and generate POE.trade URL for each Item!</p>
            <form className='flex flex-col justify-center items-center gap-2' onSubmit={handleSubmit}>
               <textarea className="rounded-sm p-2 text-sm" placeholder="Put build import code here" type="text" name="importCode" rows='5' cols="50" required></textarea>
               <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                  <select className='w-50 h-10 text-center' defaultValue="Necropolis" id="leagueSelect">
                     <option value="Necropolis">Necropolis</option>
                     <option value="Standard">Standard</option>
                     <option value="Ruthless%20Necropolis">Ruthless Necropolis</option>
                     <option value="Ruthless">Ruthless</option>
                     <option value="Hardcore%20Necropolis">Hardcore Necropolis</option>
                     <option value="Hardcore">Hardcore</option>      
                     <option value="HC%20Ruthless%20Necropolis">HardCore Ruthless Necropolis</option>
                     <option value="Hardcore%20Ruthless">Hardcore Ruthless</option>
                  </select>
                  <div className='flex flex-row gap-3'>
                     <button className='text-center min-w-10 p-1 rounded-md'>Go</button>
                     <button className='text-center min-w-10 p-1 rounded-md' onClick={(event) => {event.preventDefault();location.reload()}}>Restart</button>
                  </div>
               </div>
            </form>
         </div>
         <StyledSplit className={`item_split-normal`}></StyledSplit>
         {loader? <div className="lds-dual-ring"></div> : <></>}
         {inputError? <p className='text-white text-center'>Build code not recognized! Try another Code.</p> : ''}
         <article className='flex flex-col items-center gap-4 m-10 text-white'>
            {!loader && !inputError && buildItemArray[0]?
                  <ItemFeed items={buildItemArray} leagueChoice={leagueChoice} />
               :
                  <></>
            }
         </article>
      </div>
   )
};

export default App;