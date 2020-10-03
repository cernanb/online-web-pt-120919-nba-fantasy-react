export const signup = (userObject, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userObject }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'AUTH_SUCCESSFUL',
          payload: { loggedIn: data.logged_in, currentUser: data.user },
        });
        history.push('/dashboard');
      });
  };
};
