import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import App from '../components/App';
import NewMeetripForm from '../components/NewMeetripForm';
import { sleep } from '../testHelpers';

import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Displays all the meetrips', () => {
    const appWrapper = mount(<App />);
    expect(appWrapper.find('h1').exists()).to.equal(true);
  })
});
