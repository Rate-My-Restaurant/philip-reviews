import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../components/ReviewList';
import Mockresponse from '../mockresponse.js';

function setup() {
  const props = {
    allReviews : Mockresponse
  };
  const wrapper = shallow(<ReviewList/>);
  return {wrapper, props};
}

describe('Reviewlist Test Suite', () => {
  it('should render all reviews', () => {
    const { wrapper } = setup();
    expect(wrapper).toExist();
  });
});