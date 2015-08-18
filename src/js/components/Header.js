import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router'

export default class Header extends Component {

  render() {
    const { login,actions } = this.props;

    return (
      <header>
        <ul>
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li className={login ? '': 'none'}><Link to="/profile">Profile</Link></li>
          {/*<li><Link to="/admin">Admin</Link></li>*/}
        </ul>
        <button className={login ? 'none': ''} onClick={actions.showPopup}>Sign In</button>
        <button className={login ? '': 'none'} onClick={actions.hangleLogout}>Sign Out</button>
      </header>
    );
  }
}
