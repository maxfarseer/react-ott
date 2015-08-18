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
    const { children, authPopup, user, dispatch, loading } = this.props;
    const actions = bindActionCreators(AppActions, dispatch);
    let isLoading;

    if (loading) {
      isLoading = (<div className='loading'></div>);
    }

    return (
      <div>
        <div className='app'>
          <HeaderContainer />
          {children}
          <AuthPopupContainer authPopup={authPopup} actions={actions} user={user} />
        </div>
        {isLoading}
      </div>

    )
  }
}

function select(state) {
  return {
    authPopup: state.mainstate.authPopup,
    user: state.mainstate.user,
    loading: state.mainstate.loading
  };
}

export default connect(select)(App);
