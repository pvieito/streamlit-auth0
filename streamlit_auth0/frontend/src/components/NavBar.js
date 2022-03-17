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
    isAuthenticated,
    loginWithPopup,
    getIdTokenClaims,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () => {
    logout({ localOnly: true });
    onRun(null);
  }

  const getAccessToken = () => {
    return getIdTokenClaims();
  }

  if (isAuthenticated) {
    getAccessToken().then(
      (token) => {
        onRun(token.__raw);
      }
    )
  } else {
    onRun(null)
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
                  onRun(null)
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

