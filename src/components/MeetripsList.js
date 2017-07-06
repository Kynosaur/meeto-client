import React from 'react';
import Meetrip from './Meetrip';

class MeetripsList extends React.Component {
  constructor() {
    super();
    this.state = { meetrips: [] };
  }

  fetchMeetrips() {
    fetch('http://localhost:9292/meetrips').then(response => {
      return response.json().then(json => {
        this.setState({ meetrips: json });
      });
    });
  }

  componentDidMount() {
    this.fetchMeetrips();
  }

  render() {
    return (
      <div>
        <h2>List of Meetrips</h2>
        <ul>
          {this.state.meetrips.map(meetrip => {
            <Meetrip
              key={meetrip.id}
              fromLocation={meetrip.from_location}
              toLocation={meetrip.to_location}
              contactInfo={meetrip.contact_info}
            />;
          })}
        </ul>
      </div>
    );
  }
}

export default MeetripsList;
