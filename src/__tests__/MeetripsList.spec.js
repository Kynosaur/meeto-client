import React from 'react';
import { shallow, mount } from 'enzyme';
import MeetripsList from '../components/MeetripsList';
import { expect } from 'chai';
import { sleep } from '../testHelpers';
import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

describe('MeetripsList', () => {
  it('Displays all the meetrips;', () => {
    const meetripsList = shallow(<MeetripsList />);
    expect(meetripsList.find('h2').text()).to.equal('List of Meetrips');
  });

  it('Fetches the meetrips', async () => {
    const meetripsList = mount(<MeetripsList />);
    await sleep(500);
    expect(meetripsList.find('ul').children().length).not.to.equal(0);
  })
});
