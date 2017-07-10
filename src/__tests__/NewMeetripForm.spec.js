import React from 'react';
import { shallow } from 'enzyme';
import { XMLHttpRequest } from 'xmlhttprequest';
import NewMeetripForm from '../components/NewMeetripForm';
global.XMLHttpRequest = XMLHttpRequest;

describe('NewMeetripForm', () => {
  it('renders a form', () => {
    const newMeetripForm = shallow(<NewMeetripForm />);
    expect(newMeetripForm.find('form').children().length).toEqual(8);
  })
})
