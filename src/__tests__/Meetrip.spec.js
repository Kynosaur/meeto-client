import React from 'react';
import { shallow } from 'enzyme';
import { sleep } from '../testHelpers';
import { XMLHttpRequest } from 'xmlhttprequest';
import Meetrip from '../components/Meetrip';
global.XMLHttpRequest = XMLHttpRequest;

describe('Meetrip', () => {
  it('Displays information about a meetrip', () => {
    const meetrip = shallow(
      <Meetrip
        key="1"
        fromLocation="London"
        toLocation="Leeds"
        contactInfo="555 2525"
      />
    );
    expect(meetrip.find('li').text()).toEqual(
      'From: London, To: Leeds, Contact: 555 2525'
    );
  });
});
