export default (state = { loggedIn: false, currentUser: {} }, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESSFUL':
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        currentUser: action.payload.currentUser,
      };
    default:
      return state;
  }
};
