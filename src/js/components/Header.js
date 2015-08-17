import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router'

export default class Admin extends Component {

  render() {
    const { login } = this.props;
    return (
      <header>
        <ul>
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li className={login ? 'none': ''}><Link to="/signin">Sign In</Link></li>
          <li className={login ? '': 'none'}><Link to="/profile">Profile</Link></li>
          <li className={login ? '': 'none'}><Link to="/signout">Sign out</Link></li>
          {/*<li><Link to="/admin">Admin</Link></li>*/}
        </ul>
      </header>
    );
  }
}
