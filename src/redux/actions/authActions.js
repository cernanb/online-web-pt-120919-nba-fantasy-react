export const signup = (user, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ user: user }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: 'AUTH_SUCCESSFUL',
          payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
        history.push(`/dashboard`);
      });
  };
};
export const login = (user, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ user: user }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'AUTH_SUCCESSFUL',
          payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
        history.push(`/dashboard`);
      });
  };
};

export const checkLoggedIn = (callback) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/logged_in`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'AUTH_SUCCESSFUL',
          payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
        callback();
      });
  };
};

export const logout = (history) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/logout`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
      });
  };
};
