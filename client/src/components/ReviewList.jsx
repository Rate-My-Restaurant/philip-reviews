import React from 'react';
import ReactDOM from 'react-dom';
import ReviewItem from './ReviewItem.jsx';

const ReviewList = (props) => {
  console.log('reviewlistProps', props);
  return (
  <div>
    <h5>All Reviews</h5>
    There are {props.allReviews.length} reviews.
    <ol>
    {
      props.allReviews.map((item) => {
        console.log(item);
        return <li><ReviewItem reviewItem={item}/></li>
      })
    }
    </ol>
  </div>
)}

export default ReviewList;
