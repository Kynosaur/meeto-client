import React from 'react';
import { shallow } from 'enzyme';
import MeetripsList from '../components/MeetripsList';

describe('MeetripsList', () => {
  it('Displays all the meetrips;', () => {
    const meetripsList = shallow(<MeetripsList />);
    expect(meetripsList.find('h2').text()).toEqual('List of Meetrips');
  })
})
