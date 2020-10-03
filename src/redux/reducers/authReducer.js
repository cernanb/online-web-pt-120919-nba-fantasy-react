export default (state = { loggedIn: false, currentUser: {} }, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESSFUL':
      return {
        ...state,
        currentUser: action.payload.currentUser,
        loggedIn: action.payload.loggedIn,
      };
    case 'LOG_OUT':
      return { ...state, loggedIn: false, currentUser: {} };
    default:
      return state;
  }
};
