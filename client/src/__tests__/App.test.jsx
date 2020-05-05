import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App test', () => {
  it('should render App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  })
})