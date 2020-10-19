import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
import { checkLoggedIn } from './redux/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    loading: true,
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  componentDidMount() {
    this.props.checkLoggedIn(this.toggleLoading);
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/players"
              render={(props) => {
                if (this.props.loggedIn) {
                  return <PlayerList {...props} />;
                } else {
                  return <Redirect to="/login" />;
                }
              }}
            />
            <Route
              path="/dashboard"
              render={(props) => {
                if (this.props.loggedIn) {
                  return <Dashboard {...props} />;
                } else {
                  return <Redirect to="/login" />;
                }
              }}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, { checkLoggedIn })(App);
