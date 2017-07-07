import React from 'react';

class NewMeetripForm extends React.Component {

  constructor() {
    super()
    this.state = {from_location: '', to_location: '', contact_info: ''};
    this.handleChange = this.handleChange.bind(this);
    this.createMeetrip = this.createMeetrip.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value})
  }

  createMeetrip(event) {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
    fetch('http://localhost:9292/meetrips/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
      body: JSON.stringify(this.state)
    });
  }

  render() {
    return (
      <form onSubmit={this.createMeetrip}>
        <label htmlFor='from_location'>From:</label>
        <input type='text' name='from_location' placeholder='E.g. London' ref='fromLocation' onChange={this.handleChange} />
        <label htmlFor='to_location'>To:</label>
        <input type='text' name='to_location' placeholder='E.g. Manchester' ref={'toLocation'} onChange={this.handleChange}/>
        <label htmlFor='contact_info'>Contact Information:</label>
        <input type='text' name='contact_info' placeholder='E.g. 555 0123' ref={'contactInfo'} onChange={this.handleChange}/>
        <input type='submit' value='Create Meetrip' ref={'submitMeetripButton'} />
      </form>
    )
  }
}

export default NewMeetripForm;
