import React, { useEffect, useState } from 'react';
//utils
import { fetchData, codeDecompress, isIterable } from './utils/generalUtils';
import { createItemObj, addOrder, translateModifiers, translateModifiersRare, handleInfluenceExplicits } from './utils/itemCreateUtils';
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
   const [isLoaded, setIsLoaded] = useState(false);
   const [loader, setLoader] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [showScrollButton, setShowScrollButton] = useState(false);
   
   const handleFetchItemData = async () => {
      allModifiers = await fetchData('./item_mods/allModifiers.json');
      allItemData = await fetchData('./item_mods/allItemTypes.json');
   }

   if(allModifiers === null && allItemData === null){ handleFetchItemData() };

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
         let tempItem = createItemObj(i, allItemData);
         tempItemArray.push(tempItem);
      }
      
      //Translate mods for filter
      tempItemArray.map((item) => {
         translateModifiers(item.implicits, allModifiers, 'implicit');
         item.rarity === "UNIQUE"? translateModifiers(item.explicits, allModifiers, 'explicit') : translateModifiersRare(item, allItemData, allModifiers);
         if(item.explicits.some(i => /hunter|shaper|crusader|warlord|elder|redeemer/.test(i.influence))){ handleInfluenceExplicits(item, allItemData) };
      })
      buildItemArray = addOrder(tempItemArray);
      
      setTimeout(() => {
         setLoader(false);
         setIsLoaded(true);
      }, 500);
   };

   const handleScrollTop = () => {
      window.scrollTo({top: 0, behavior:'smooth'});
   };

   useEffect(() => {
      const handleScrollButtonVisibility = () => {
         window.scrollY > 300 ? setShowScrollButton(true) : setShowScrollButton(false);
      };

      window.addEventListener('scroll', handleScrollButtonVisibility);

      return () => {
         window.removeEventListener('scroll', handleScrollButtonVisibility);
      };
   }, []);

   return (
      <div>
         {(isLoaded === false)
            ?  <>
                  <div>
                     <button onClick={() => setIsOpen(true)} className='openModalBtn'><img src="./img/info_icon.jpg" alt="How to use" title="How to use"/></button>
                     <Modal open={isOpen} close={() => setIsOpen(false)}>
                        <div>
                           <h3 className='text-center'>How to Use:</h3>
                           <p className={`item_split bg-slate-950 my-4`}></p>
                           <div className='my-2'>
                              <p>1 - Import Build Code from: POE Ninja, Path Of Building, Pastebind or any equivalent</p>
                              <p>2 - Paste the code into the Import code Input</p>
                              <p>3 - Select your league</p>
                              <p>4 - Click "Go"</p>
                              <p>The list of item of the build are now imported.</p>
                              <p>An estimated price should give you an idea of the item price.</p>
                              <p>You can now select the desired stats for you item and press "Trade" !</p>
                           </div>
                           <p className={`item_split bg-slate-950 my-4`}></p>
                           <div className='my-2'>
                              <p className='text-center'>⚠️ WARNING ⚠️</p>
                              <p>Estimated Price is about the cheapest item best you can find. Real items with desired stats often cost way more !</p>
                              <p>This value is given just to give an idea about the item rarity.</p>
                              <p>Too much stats selecting could end up in showing no results (good items are rare) !</p>
                              <p>Image and Prices Data are fetched with the Poe.ninja API.</p>
                           </div>
                           <p className={`item_split bg-slate-950 my-4`}></p>
                           <div className='my-2'>
                              <p>This app is a personal project.</p>
                              <p>Project Repo: <a href="https://github.com/BadaboommS/PoeTradeHelper">Link</a></p>
                           </div>
                           <p className={`item_split bg-slate-950 my-4`}></p>
                           <div className="flex justify-center my-2">
                              <button onClick={ () => setIsOpen(false)} className="bg-stone-500 text-white text-center p-2 rounded-sm">Got It !</button>
                           </div>
                        </div>
                     </Modal>
                  </div>
                  <InputCode handleSubmit={ handleSubmit }/>
               </>
            :  <div className='flex flex-row justify-center my-2 gap-3'>
                  <button className='text-center min-w-10 p-1 rounded-md text-xl' onClick={(event) => {event.preventDefault();location.reload()}}>Input another Code</button>
               </div>
         }
         <p className={`item_split item_split-normal my-4`}></p>
         {(loader)
            ? <div className="lds-dual-ring"></div> 
            : <></>
         }
         {(inputError)
            ? <p className='text-white text-center'>Build code not recognized! Try another Code.</p> 
            : ''
         }
         {(!loader && !inputError && buildItemArray[0])
            ?
               <article className='flex flex-col items-center m-auto text-white'>
                     <ItemFeed items={buildItemArray} leagueChoice={defaultLeagueChoice} />
               </article>
            :
               <></>
         }
         {(showScrollButton)
            ?  <div>
                  <button className='fixed bottom-5 right-7 z-50 cursor-pointer rounded-md p-4' onClick={handleScrollTop}>
                     ↑
                  </button>
               </div> 
            :  <></>
         }
      </div>
   )
};

export default App;