import React from 'react';
import ReactDOM from 'react-dom';
import ReviewItem from './ReviewItem.jsx';
import styled from 'styled-components';

const UnorderedList = styled.ul `
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  color: #333;
`
const List = styled.li `
  border-color: #eeeeef;
  border-bottom: 1px solid #eeeeef;
  padding-bottom: 24px!important;
  margin-bottom: 24px!important;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  display: list-item;
  text-align: -webkit-match-parent;
`


const ReviewList = (props) => {
  console.log('reviewlistProps', props);
  return (
    <UnorderedList>
    {
      props.allReviews.map((item) => {
        console.log(item);
        return <List><ReviewItem reviewItem={item}/></List>
      })
    }
    </UnorderedList>
)}

export default ReviewList;
