import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
//utils
import { isIterable } from './utils/isIterable';
import { codeDecompress } from './utils/codeDecompress';
import { createItemObj } from './utils/createItemObj';
import { fetchData } from './utils/fetchData';
import { translateModifiers } from './utils/translateModifiers';
import { addOrder } from './utils/addOrder';
//components
import { Item } from './components/Item';

//init
let buildItemArray = [];
let leagueChoice = "Standard";

//styledComponents
const StyledH1 = styled.h1`
   color: white;
   text-align: center;
`
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
      //console.log(htmlItems);

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
      }, 1000);
   };

   async function handleObjects(tempItemArray){
      //fetch and translate mods for filter
      const allModifiers = await fetchData('./item_mods/allModifiers.json');
      const allItems = await fetchData('./item_mods/allItems.json');
      tempItemArray.map((item) => {
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
            <StyledH1>POE Build Trade Helper</StyledH1>
            <StyledP>Put build import code and generate POE.trade URL for each Item!</StyledP>
            <StyledForm onSubmit={handleSubmit}>
               <textarea placeholder="Put build import code here" type="text" name="importCode" rows='5' cols="50" required></textarea>
               <StyledSection>
                  <StyledSelect defaultValue="Affliction" id="leagueSelect">
                     <option value="Affliction">Affliction</option>
                     <option value="Hardcore%20Affliction">Hardcore Affliction</option>
                     <option value="Ruthless%20Affliction">Ruthless Affliction</option>
                     <option value="HC%20Ruthless%20Affliction">HardCore Ruthless Affliction</option>
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
         {inputError? <StyledP>Build code not recognized! Try another Code.</StyledP> : ''}
         <StyledDiv>
         {buildItemArray[0]?
               buildItemArray.map((item, i) => {
                  return (
                     <Fragment key={i}>
                        <Item 
                           itemNumber = {i}
                           item = {item}
                           league = {leagueChoice}
                        />
                        <StyledSplit className={`item_split-normal`}></StyledSplit>
                     </Fragment>
                  );
               })
            :
               <></>
         }
         </StyledDiv>
      </div>
   )
};

export default App;