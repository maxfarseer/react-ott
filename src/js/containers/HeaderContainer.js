import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions/AppActions';

import Header from '../components/Header';

class HeaderContainer extends Component {
  render() {
    const { user: {login}, dispatch } = this.props;
    const actions = bindActionCreators(AppActions, dispatch);
    return (
      <div>
        <Header login={login} actions={actions}/>
      </div>
    )
  }
}

function select(state) {
  return {
    user: state.mainstate.user
  };
}

export default connect(select)(HeaderContainer);
