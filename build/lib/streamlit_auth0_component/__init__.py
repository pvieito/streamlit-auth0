import os

import streamlit.components.v1 as components

parent_dir = os.path.dirname(os.path.abspath(__file__))
build_dir = os.path.join(parent_dir, "frontend/build")
_login_button = components.declare_component("login_button", path=build_dir)


def login_button(*, client_id, domain, key=None, ):
    """Create a new instance of "login_button".

    Parameters
    ----------
    client_id: str
        client_id per auth0 config on your Applications / Settings page
    
    domain: str
        domain per auth0 config on your Applications / Settings page in the form dev-xxxx.us.auth0.com

    key: str or None
        An optional key that uniquely identifies this component. If this is
        None, and the component's arguments are changed, the component will
        be re-mounted in the Streamlit frontend and lose its current state.

    Returns
    -------
    dict
        User info
    """

    return _login_button(auth_setup={"clientId": client_id, "domain": domain}, key=key, default=0)
