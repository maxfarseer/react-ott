import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './HeaderContainer'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, children, user:{login} } = this.props;
    const { pathname } = location;
    const value = pathname.substring(1);

    return (
      <div>
        <HeaderContainer />
        {children}
      </div>
    )
  }
}

function select(state) {
  return {
    user: state.mainstate.user
  };
}

export default connect(select)(App);
