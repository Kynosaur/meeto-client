import React from 'react';

class Meetrip extends React.Component {
  render() {
    return (
      <li>From: {this.props.fromLocation}, To: {this.props.toLocation}, Contact: {this.props.contactInfo}</li>
    )
  }
}

export default Meetrip;