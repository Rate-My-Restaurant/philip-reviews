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

  // async componentDidMount() {
    // try {
    //   const reviews = await axios.get('/reviews');
    //   const numReviewsPics = await axios.get('/userpicsreviews');
    //   await this.setState({
    //     reviews,
    //     userPicReviews: numReviewsPics
    //   });
    // } catch (error) {
    //   console.error('GET review request not successful:', error)
    // }

    componentDidMount() {
      axios.get('/reviews')
        .then(res => {
          console.log('GET review request successful:', res.data)
          this.setState({reviews: res.data});
         })
        .catch(error => {
            console.log('GET reviews,pic number failed:', error)
        });
    };


  render() {
    return (
      <div>
        <h4>Recommended Reviews</h4>
        <SearchReview/>
        <ReviewList allReviews={this.state.reviews} numReviewsPics={this.state.userPicReviews}/>
      </div>
    )
  }
}

export default App;