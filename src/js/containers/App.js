import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions/AppActions';

import HeaderContainer from './HeaderContainer';
import AuthPopupContainer from './AuthPopupContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { children, authPopup, user, dispatch } = this.props;
    const actions = bindActionCreators(AppActions, dispatch);
    return (
      <div>
        <HeaderContainer />
        {children}
        <AuthPopupContainer authPopup={authPopup} actions={actions} user={user} />
      </div>
    )
  }
}

function select(state) {
  return {
    authPopup: state.mainstate.authPopup,
    user: state.mainstate.user
  };
}

export default connect(select)(App);
