import React from 'react';

class Meetrip extends React.Component {
  createMeetrip(event) {
    event.preventDefault();
    const meetrip = {
      from_location: this.fromLocation.value,
      to_location: this.toLocation.value,
      contact_info: this.contactInfo.value
    };
    console.log(meetrip);
    fetch('http://localhost:9292/meetrips/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(meetrip)
    });
    this.fromLocation.value = ''
    this.toLocation.value = ''
    this.contactInfo.value = ''
  }

  render() {
    return (
      <form id="meetrip-form" onSubmit={e => this.createMeetrip(e)}>
        <h3>Add a Meetrip:</h3>
        <input
          ref={input => (this.fromLocation = input)}
          type="text"
          placeholder="From"
        />
        <input
          ref={input => (this.toLocation = input)}
          type="text"
          placeholder="To"
        />
        <input
          ref={input => (this.contactInfo = input)}
          type="text"
          placeholder="Contact Details"
        />
        <button type="submit">+ Add Meetrip</button>
      </form>
    );
  }
}

export default Meetrip;
