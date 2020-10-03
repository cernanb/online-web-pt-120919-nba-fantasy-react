import React from 'react';
import { signup } from '../redux/actions/authActions';
import { connect } from 'react-redux';

class Registration extends React.Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signup(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            onChange={this.handleOnChange}
            name="email"
            value={this.state.email}
            type="email"
          />
          <br />
          <label>Password</label>
          <input
            onChange={this.handleOnChange}
            name="password"
            value={this.state.password}
            type="text"
          />
          <br />
          <label>Confirm Password</label>
          <input
            onChange={this.handleOnChange}
            name="password_confirmation"
            value={this.state.passwordConfirmation}
            type="text"
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { signup })(Registration);
