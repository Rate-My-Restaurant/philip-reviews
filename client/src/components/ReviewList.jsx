import React from 'react';
import ReactDOM from 'react-dom';
import ReviewItem from './ReviewItem.jsx';
import styled from 'styled-components';

// need a write review item
// pass down user's profile
// hover -> star
// make a modal that lets you write a review and submit

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

const ReviewList = (props) => {
  return (
    <div>
      <UnorderedList>
        {
          props.allReviews.map((item) => {
            return <li><ReviewItem reviewItem={item} buttonSubmit={props.buttonSubmit}/></li>
          })
        }
      </UnorderedList>
    </div>
)}

export default ReviewList;
