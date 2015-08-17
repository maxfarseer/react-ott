import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, children } = this.props;
    const { pathname } = location;
    const value = pathname.substring(1);

    return (
      <div>
        <header>
          <ul>
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </header>
        {children}
      </div>
    )
  }
}

/*function select(state) {
  return {
    user: state.user
  };
}

export default connect(select)(App);*/
