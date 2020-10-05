import React, { Component } from 'react';
import { signup } from '../redux/actions/authActions';
import { connect } from 'react-redux';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <label>Confirm Password</label>
          <input
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
