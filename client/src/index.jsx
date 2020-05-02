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
      url: '/reviews',
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
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementID('app'));

