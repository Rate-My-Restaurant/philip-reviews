import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './components/ReviewList.jsx';
import SearchReview from './components/SearchReview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $.ajax ({
      type: 'GET',
      url: '/pictures',
      success: (res) => {
        console.log('GET reviews request successful: ', res);
      },
      error: (err) => {
        console.log('GET reviews request not successful: ', err)
      }
    })
  }

  render() {
    return (
      <div>
        <img src="https://fec-yelpreviews.s3-us-west-1.amazonaws.com/reviewpics/kimchi_pic1.jpg"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
