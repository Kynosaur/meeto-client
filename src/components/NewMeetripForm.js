import React from 'react';

class NewMeetripForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.createMeetrip}>
        <label htmlFor='from-location'>From:</label>
        <input type='text' name='from-location' placeholder='E.g. London' />
        <label htmlFor='to-location'>To:</label>
        <input type='text' name='to-location' placeholder='E.g. Manchester' />
        <label htmlFor='contact-info'>Contact Information:</label>
        <input type='text' name='contact-info' placeholder='E.g. 555 0123' />
        <input type='submit' value='Create Meetrip' />
      </form>
    )
  }
}

export default NewMeetripForm;
