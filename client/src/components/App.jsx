import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import SearchReview from './SearchReview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get('/reviews')
      .then(res => {
        console.log('GET review request successful:', res.data)
        this.setState({reviews: res.data});
      })
      .catch(error => {
        console.log('GET review request not successful:', error);
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