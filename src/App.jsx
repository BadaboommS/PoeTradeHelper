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
import InputCode from './components/InputCode';
import Modal from './components/Modal';

//init
let buildItemArray = [];
let defaultLeagueChoice = "Necropolis";

//styledComponents
const StyledSplit = styled.p`
    margin: 1rem auto;
`

export function App() {
   const [inputError, setInputError] = useState(false);
   const [reload, setReload] = useState(false);
   const [loader, setLoader] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   let allModifiers;
   let allItems;
   let allItemData;
   
   const handleFetchData = async () => {
      allModifiers = await fetchData('./item_mods/allModifiers.json');
      allItems = await fetchData('./item_mods/allItems.json');
      allItemData = await fetchData('./item_mods/allItemTypes.json');
   }
   handleFetchData();

   /* let uniqueWeapons;
   let uniqueArmour;
   let uniqueAccessory;
   let uniqueFlask;
   let uniqueJewel;

   const handleFetchUniques = async (league) => {
      uniqueWeapons = await fetchData(`https://poe.ninja/api/data/itemoverview?league=Necropolis&type=UniqueWeapon`);
      uniqueArmour = await fetchData(`https://poe.ninja/api/data/itemoverview?league=Necropolis&type=UniqueArmour`);
      uniqueAccessory = await fetchData(`https://poe.ninja/api/data/itemoverview?league=Necropolis&type=UniqueAccessory`);
      uniqueFlask = await fetchData(`https://poe.ninja/api/data/itemoverview?league=Necropolis&type=UniqueFlask`);
      uniqueJewel = await fetchData(`https://poe.ninja/api/data/itemoverview?league=Necropolis&type=UniqueJewel`);
   } */

   function handleSubmit(event){
      buildItemArray = [];
      setInputError(false);
      setLoader(true);
      event.preventDefault();

      //retrieve league choice
      let e = document.getElementById("leagueSelect");
      defaultLeagueChoice !== e.value;

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
            <button onClick={() => setIsOpen(true)} className='openModalBtn'><img src="./img/info_icon.jpg" alt="How to use" title="How to use"/></button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
               <div>
                    <h3 className='text-center'>How to Use:</h3>
                    <p>1 - Import Build Code from: POE Ninja, Path Of Building, Pastebind or any equivalent.</p>
                    <p>2 - Paste the code into the Import code Input.</p>
                    <p>3 - Select your league.</p>
                    <p>4 - Enjoy !</p>
                </div>
            </Modal>
         </div>
         <InputCode handleSubmit={ handleSubmit }/>
         <StyledSplit className={`item_split-normal`}></StyledSplit>
         {loader? <div className="lds-dual-ring"></div> : <></>}
         {inputError? <p className='text-white text-center'>Build code not recognized! Try another Code.</p> : ''}
         {!loader && !inputError && buildItemArray[0]?
               <article className='flex flex-col items-center gap-4 m-10 text-white'>
                     <ItemFeed items={buildItemArray} leagueChoice={defaultLeagueChoice} />
               </article>
            :
               <></>
         }
      </div>
   )
};

export default App;