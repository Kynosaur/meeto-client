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

  it('creates a new meetrip', async () => {
    const appWrapper = mount(<App />);
    const formWrapper = mount(<NewMeetripForm />);
    const fromLocation = formWrapper.ref('fromLocation');
    const toLocation = formWrapper.ref('toLocation');
    const contactInfo = formWrapper.ref('contactInfo');
    const submitButton = formWrapper.ref('submitMeetripButton');
    fromLocation.simulate('change', { target: { value: 'London' } });
    toLocation.simulate('change', { target: { value: 'Manchester' } });
    contactInfo.simulate('change', { target: { value: '555 123' } });
    submitButton.simulate('click');
    appWrapper.update();
    await sleep(500)
    expect(appWrapper.text()).to.include('From: London, To: Manchester, Contact: 555 123');
  })
});
