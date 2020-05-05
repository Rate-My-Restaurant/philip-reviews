import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// const Button = styled.button`
//   cursor: pointer;
//   background: transparent;
//   font-size: 16px;
//   border-radius: 3px;
//   color: ${props => (props.primary ? 'violet' : 'palevioletred')};
//   border: ${props => props.primary ? '2px solid violet' : '2px solid palevioletred'};
//   margin: 0 1em;
//   padding: 0.25em 1em;
//   transition: 0.5s all ease-out;

//   $:hover {
//     color: white;
//     background-color: ${props =>
//     props.primary ? 'violet' : 'palevioletred'};
//   }
// `;

const ReviewItem = (props) => (
  <div>
    <div>
      <span>{props.reviewItem.stars} Stars</span>
      <span>{props.reviewItem.uploadDate}</span>
    </div>
    <div>
      <span></span>
      <span>{props.reviewItem.restaurantVisit} check-in</span>
    </div>
    <div>{props.reviewItem.content}</div>
    <div>See all photos from {props.reviewItem.userName} for {props.reviewItem.restaurantName}</div>
    <div>
      <span>Useful {props.reviewItem.emojiUseful}</span>
      <span>Funny {props.reviewItem.emojiFunny}</span>
      <span>Cool {props.reviewItem.emojiCool}</span>
      <span>report review</span>
    </div>
    <div>
      <span>Comment from {props.reviewItem.restaurantName}</span><br></br>
      <span>{props.reviewItem.reply}</span>
    </div>
  </div>
);
export default ReviewItem;
