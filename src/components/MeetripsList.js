import React from 'react';
import Meetrip from './Meetrip';
import NewMeetripForm from './NewMeetripForm'

class MeetripsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meetrips: [],
                   refresh: false};
    this.handler = this.handler.bind(this);
  }

  handler(event) {
    this.fetchMeetrips();
  }

  componentDidMount() {
    this.fetchMeetrips();
  }

  fetchMeetrips() {
    fetch('http://localhost:9292/meetrips').then(response => {
      return response.json().then(json => {
        this.setState({ meetrips: json });
      });
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
      <div>
        <h2>List of Meetrips</h2>
        <ul>
          {this.renderMeetrips()}
        </ul>
        <NewMeetripForm handler = {this.handler} />
      </div>
    );
  }
}

export default MeetripsList;
