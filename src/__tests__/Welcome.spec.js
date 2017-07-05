import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../components/Welcome';

describe('Welcome', () => {
  it('Displays a generic welcome message;', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.find('h1').text()).toEqual('Welcome to Meeto!');
  })
})
