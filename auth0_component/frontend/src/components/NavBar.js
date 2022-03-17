import React from "react";
// styles
import "./NavBar.css";
// eslint-disable-next-line
import {Button, Container,} from "reactstrap";

// eslint-disable-next-line
import {useAuth0} from "@auth0/auth0-react";

const NavBar = (props) => {
  var onRun = props['props']['onRun']

  // eslint-disable-next-line
  const {
    user,
    isAuthenticated,
    loginWithPopup,
    getAccessTokenSilently,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () => {
    logout({ localOnly: true });
    onRun(false);
  }

  const getAccessToken = () => {
    return getAccessTokenSilently();
  }

  if (isAuthenticated) {
    getAccessToken().then(
      (token) => {
        user['token'] = token;
        onRun(user);
      }
    )
  } else {
    onRun(false)
  }

  return (
    <div className="nav-container">
      <center>
        <Container className="login-component">
          {!isAuthenticated && (
            <Button
              color="primary"
              className="btn-margin"
              onClick={() => {
                loginWithPopup({}).then(() => {
                  onRun(false)
                })
              }}
            >
              Sign In…
            </Button>
          )}
          {isAuthenticated && (
            <Button
              onClick={() => {
                logoutWithRedirect()
              }}
            >Sign Out
            </Button>
          )}
        </Container>
      </center>
    </div>
  );
};

export default NavBar;

