import React from 'react';

class NewMeetripForm extends React.Component {

  constructor(props) {
    super(props)
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
    event.preventDefault();
    fetch('https://meetoapi.herokuapp.com/meetrips/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
      body: JSON.stringify(this.state)
    });
    this.refs.fromLocation.value = ''
    this.refs.toLocation.value = ''
    this.refs.contactInfo.value = ''
  }

  render() {
    return (
      <form onSubmit={this.createMeetrip} className='newMeetripForm'>
        <label htmlFor='from_location'>From:</label>
        <input type='text' name='from_location' placeholder='E.g. London' ref={'fromLocation'} onChange={this.handleChange} />
        <label htmlFor='to_location'>To:</label>
        <input type='text' name='to_location' placeholder='E.g. Manchester' ref={'toLocation'} onChange={this.handleChange}/>
        <label htmlFor='contact_info'>Contact Information:</label>
        <input type='text' name='contact_info' placeholder='E.g. Bob, 555 0123' ref={'contactInfo'} onChange={this.handleChange}/>
        <br />
        <input type='submit' value='Create Meetrip' ref={'submitMeetripButton'} onClick={this.props.handler} />
      </form>
    )
  }
}

export default NewMeetripForm;
