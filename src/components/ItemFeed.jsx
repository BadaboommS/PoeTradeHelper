import React, { Fragment } from 'react';
import Item from './Item';
import styled from 'styled-components';

const StyledSplit = styled.p`
    margin: 1rem auto;
`

export default function ItemFeed ({ items, leagueChoice }){
  return (
    items.map((item, i) => {
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
  )
}