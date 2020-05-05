import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../components/ReviewList';

describe('Reviewlist test', () => {
  it('should render all reviewItem components', () => {
    const wrapper = shallow(<ReviewList/>);
    expect(wrapper).toMatchSnapshot();
  });
});