import React from "react";
import {Auth0Provider} from "@auth0/auth0-react";
import NavBar from "./components/NavBar";

import {Streamlit, StreamlitComponentBase, withStreamlitConnection,} from "streamlit-component-lib"

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";

var _ = require('lodash');

initFontAwesome();

class App extends StreamlitComponentBase {
  constructor(props) {
    super(props)
    this.state = { user: null };
  }

  providerConfig = {
    domain: this.props['args']['auth_setup']['domain'],
    clientId: this.props['args']['auth_setup']['clientId'],
    redirectUri: window.location.origin,
  };

  onRun = (user) => {
    if (!_.isEqual(user, this.state.user)) {
      Streamlit.setComponentValue(user)
      this.setState({ user: user })
    }
  }

  render() {
    return (
      <Auth0Provider {...this.providerConfig}>
        <div id="app">
          <NavBar props={{ onRun: this.onRun }}/>
        </div>
      </Auth0Provider>
    );
  }
}

// export default App;
export default withStreamlitConnection(App)


