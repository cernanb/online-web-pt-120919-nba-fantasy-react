import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ user }) => {
  console.log(user);
  return <h1>Welcome {user.email}, Here Is Your Dashboard</h1>;
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
