import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//utils
import { isIterable } from './utils/isIterable';
import { codeDecompress } from './utils/codeDecompress';
import { createItemObj } from './utils/createItemObj';
import { fetchData } from './utils/fetchData';
import { handleMagic } from './utils/handleMagic';
import { translateModifiers } from './utils/translateModifiers';
import { addOrder } from './utils/addOrder';
//components
import ItemFeed from './components/ItemFeed';

//init
let buildItemArray = [];
let leagueChoice = "Standard";

//styledComponents
const StyledP = styled.p`
   color: white;
   text-align: center;
`
const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
`
const StyledSection = styled.section`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   gap: 20px;
`
const StyledSelect = styled.select`
   font-family: 'Fontin SmallCaps Regular';
   height: 30px;
   text-align: center;
`
const StyledButton = styled.button`
   font-family: 'Fontin SmallCaps Regular';
   min-width: 50px;
   height: 30px;
   text-align: center;
`
const StyledDiv = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: baseline;
   gap: 10px;
   margin: 10px 0;
   color: white;
`
const StyledSplit = styled.p`
    margin: 1rem auto;
`

export function App() {
   const [inputError, setInputError] = useState(false);
   const [reload, setReload] = useState(false);
   const [loader, setLoader] = useState(false);

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
      console.log(htmlItems);
      // console.log(typeof htmlItems);

      //Create item obj for each item
      let tempItemArray = [];
      for (let i of htmlItems){
         let temp = createItemObj(i);
         tempItemArray.push(temp);
      }
      handleObjects(tempItemArray);
      
      //sort
      setTimeout(() => {
         let tempArrayWeapons = tempItemArray.filter((item) => item.order === "weapons");
         let tempArrayArmour = tempItemArray.filter((item) => item.order === "armour");
         let tempArrayAccessories = tempItemArray.filter((item) => item.order === "accessories");
         let tempArrayFlask = tempItemArray.filter((item) => item.order === "flasks");
         let tempArrayJewel = tempItemArray.filter((item) => item.order === "jewels");
         let tempArrayUndefined = tempItemArray.filter((item) => item.order === undefined);
         buildItemArray = [...tempArrayWeapons, ...tempArrayArmour, ...tempArrayAccessories, ...tempArrayFlask, ...tempArrayJewel, ...tempArrayUndefined];
      }, 500)
      
      setTimeout(() => {
         setLoader(false);
         setReload(true);
      }, 500);
   };

   async function handleObjects(tempItemArray){
      //fetch and translate mods for filter
      const allModifiers = await fetchData('./item_mods/allModifiers.json');
      const allItems = await fetchData('./item_mods/allItems.json');
      tempItemArray.map((item) => {
         handleMagic(item, allItems);
         addOrder(item, allItems);
         translateModifiers(allModifiers, item.implicits, 'implicit');
         translateModifiers(allModifiers, item.explicits, 'explicit');
      })
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
            <StyledForm onSubmit={handleSubmit}>
               <textarea placeholder="Put build import code here" type="text" name="importCode" rows='5' cols="50" required></textarea>
               <StyledSection>
                  <StyledSelect defaultValue="Necropolis" id="leagueSelect">
                     <option value="Necropolis">Necropolis</option>
                     <option value="Hardcore%20Necropolis">Hardcore Necropolis</option>
                     <option value="Ruthless%20Necropolis">Ruthless Necropolis</option>
                     <option value="HC%20Ruthless%20Necropolis">HardCore Ruthless Necropolis</option>
                     <option value="Standard">Standard</option>
                     <option value="Hardcore">Hardcore</option>
                     <option value="Ruthless">Ruthless</option>
                     <option value="Hardcore%20Ruthless">Hardcore Ruthless</option>
                  </StyledSelect>
                  <StyledButton>Go</StyledButton>
                  <StyledButton onClick={(event) => {event.preventDefault();location.reload()}}>Restart</StyledButton>
               </StyledSection>
            </StyledForm>
         </div>
         <StyledSplit className={`item_split-normal`}></StyledSplit>
         {loader? <div className="lds-dual-ring"></div> : <></>}
         {inputError? <p className='text-white text-center'>Build code not recognized! Try another Code.</p> : ''}
         <StyledDiv>
         {!loader && !inputError && buildItemArray[0]?
               <ItemFeed items={buildItemArray} leagueChoice={leagueChoice} />
            :
               <></>
         }
         </StyledDiv>
      </div>
   )
};

export default App;