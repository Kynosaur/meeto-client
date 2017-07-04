import React, { Component } from 'react';
import Meetrip from './Meetrip';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { meetrips: [] };
  }

  componentDidMount() {
    fetch('http://localhost:9292/meetrips')
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ data: json });
      });
  }

  renderMeetrips() {
    return this.state.meetrips.map(meetrip =>
      <Meetrip
        key={meetrip.id}
        fromLocation={meetrip.from_location}
        toLocation={meetrip.to_location}
        contactInfo={meetrip.contact_info}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Meeto</h1>
        <h2>Available meetrips:</h2>
        <ul>
          {this.renderMeetrips()}
        </ul>
      </div>
    );
  }
}

export default App;
