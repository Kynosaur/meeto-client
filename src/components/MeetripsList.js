import React from 'react';

class MeetripsList extends React.Component {

  constructor() {
    super();
    this.state = { meetrips: [] }
  };

  fetchMeetrips() {
    fetch('http://localhost:9292/meetrips')
    .then(response => {
      return response.json()
      .then(json => {
        this.setState( { meetrips: json } )
      })
    })
  }

  componentDidMount() {
    this.fetchMeetrips();
  }

  render() {
    return (
      <div>
      <h2>List of Meetrips</h2>
      {this.state.meetrips.map(meetrip => {
        return (
          <div key={'meetrip' + meetrip.id} id={'meetrip' + meetrip.id}>
          <p>{meetrip.from_location}</p>
          <p>{meetrip.to_location}</p>
          <p>{meetrip.contact_info}</p>
          </div>
        )
      })}
      </div>
    )
  }
}

export default MeetripsList;
