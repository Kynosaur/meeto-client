import React, { Component } from 'react';
import './App.css';

import Welcome from './Welcome'
import MeetripsList from './MeetripsList'
import NewMeetripForm from './NewMeetripForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <MeetripsList />
        <NewMeetripForm />
      </div>
    );
  }
}

export default App;
