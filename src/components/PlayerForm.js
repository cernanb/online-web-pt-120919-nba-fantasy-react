import React, { Component } from 'react';

class PlayerForm extends Component {
  state = {
    name: '',
    number: '',
    photo: '',
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('number', this.state.number);
    formData.append('photo', this.state.photo);
    fetch(`http://localhost:3001/players`, {
      method: 'POST',
      body: formData,
    });
  };

  handleImageChange = (e) => {
    if (e.target.files[0]) this.setState({ photo: e.target.files[0] });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Name:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="name"
            value={this.state.name}
          />
          <br />
          <label>Number:</label>
          <input
            type="number"
            onChange={this.handleOnChange}
            name="number"
            value={this.state.number}
          />
          <br />
          <input
            type="file"
            name="photo"
            accept="image/*"
            multiple={false}
            onChange={this.handleImageChange}
          />
          <br />
          <button type="submit">Create Player</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
