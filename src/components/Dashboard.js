import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ currentUser }) => {
  return <h1>Welcome {currentUser.email}, Here is your Dashboard</h1>;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducer.currentUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
