import React, { Component } from 'react';
import './App.css';

import Welcome from './Welcome'
import MeetripsList from './MeetripsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <MeetripsList />
      </div>
    );
  }
}

export default App;
