import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/AppActions';

import Main from '../components/Main';

class MainPage extends Component {
  render() {
    const { authPopup, user, dispatch } = this.props;
    const actions = bindActionCreators(AppActions, dispatch);

    return (
      <div>
        <Main authPopup={authPopup} actions={actions} user={user} />
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

export default connect(select)(MainPage);
