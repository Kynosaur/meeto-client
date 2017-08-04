import React from 'react';
import Meetrip from './Meetrip';
import NewMeetripForm from './NewMeetripForm'
import { sleep } from '../testHelpers'

class MeetripsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meetrips: [],
                   refresh: false};
    this.handler = this.handler.bind(this);
  }

  handler(event) {
    sleep(200).then(function(done) {
      this.fetchMeetrips();
      done;
    }.bind(this));
  }

  componentDidMount() {
    this.fetchMeetrips();
  }

  fetchMeetrips() {
    fetch('https://meetoapi.herokuapp.com/meetrips').then(response => {
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
