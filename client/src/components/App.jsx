import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import SearchReview from './SearchReview.jsx';
import MockResponse from '../mockresponse.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: MockResponse,
    };
  }

  componentDidMount() {
    $.ajax ({
      type: 'GET',
      url: '/reviews',
      success: (res) => {
        console.log('GET reviews request successful: ', res);
        this.setState({reviews: res})
      },
      error: (err) => {
        console.log('GET reviews request not successful: ', err)
      }
    })
  }

  render() {
    return (
      <div>
        <h4>Recommended Reviews</h4>
        <ReviewList allReviews={this.state.reviews}/>
        <SearchReview/>
      </div>
    )
  }
}

export default App;