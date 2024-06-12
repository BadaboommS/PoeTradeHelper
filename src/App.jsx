import React, { useState } from 'react';
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
let allModifiers = null;
let allItemData = null;

export function App() {
   const [inputError, setInputError] = useState(false);
   const [loader, setLoader] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   
   const handleFetchItemData = async () => {
      allModifiers = await fetchData('./item_mods/allModifiers.json');
      allItemData = await fetchData('./item_mods/allItemTypes.json');
   }

   if(allModifiers === null && allItemData === null){handleFetchItemData()};

   function handleSubmit(event){
      event.preventDefault();

      buildItemArray = [];
      setInputError(false);
      setLoader(true);

      //retrieve league choice
      let e = document.getElementById("leagueSelect");
      defaultLeagueChoice !== e.value;

      //Retrieve Code and decode
      const code = event.target.importCode.value;
      const htmlItems = codeDecompress(code);
      if((!isIterable(htmlItems)) || (htmlItems[0].textContent === undefined)){
         setInputError(true);
         setLoader(false);
         //setReload(true);
         return
      }
      
      //Create item obj for each item
      let tempItemArray = [];
      for (let i of htmlItems){
         let tempItem = createItemObj(i, allItemData.result);
         tempItemArray.push(tempItem);
      }
      
      //Translate mods for filter
      tempItemArray.map((item) => {
         console.log(item);
         translateModifiers(allModifiers.result, item.implicits, 'Implicit');
         translateModifiers(allModifiers.result, item.explicits, 'Explicit');
      })
      buildItemArray = addOrder(tempItemArray);
      
      setTimeout(() => {
         setLoader(false);
      }, 500);
   };

   return (
      <div>
         <div>
            <button onClick={() => setIsOpen(true)} className='openModalBtn'><img src="./img/info_icon.jpg" alt="How to use" title="How to use"/></button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
               <div>
                    <h3 className='text-center'>How to Use:</h3>
                    <p>1 - Import Build Code from: POE Ninja, Path Of Building, Pastebind or any equivalent</p>
                    <p>2 - Paste the code into the Import code Input</p>
                    <p>3 - Select your league</p>
                    <p>4 - Select the desirated stats on your item</p>
                    <p>5 - Use the Link to check POE Trade offers</p>
                    <div className='text-center mt-2'>
                     <p>⚠️ WARNING ⚠️ Estimated Price is about the cheapest item best you can find. Real items with stats often cost way more !</p>
                     <p>Image and Prices Data are fetched with the Poe.ninja API.</p>
                     <p>Project Repo: https://github.com/BadaboommS/PoeTradeHelper</p>
                    </div>
                </div>
            </Modal>
         </div>
         <InputCode handleSubmit={ handleSubmit }/>
         <p className={`item_split item_split-normal my-4`}></p>
         {loader? <div className="lds-dual-ring"></div> : <></>}
         {inputError? <p className='text-white text-center'>Build code not recognized! Try another Code.</p> : ''}
         {!loader && !inputError && buildItemArray[0]?
               <article className='flex flex-col items-center m-auto text-white'>
                     <ItemFeed items={buildItemArray} leagueChoice={defaultLeagueChoice} />
               </article>
            :
               <></>
         }
      </div>
   )
};

export default App;