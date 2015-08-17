import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthPopupActions from '../actions/AuthPopupActions';

import Main from '../components/Main';

class MainPage extends Component {
  showPopup() {

  }
  hidePopup() {

  }
  render() {
    const { authPopup, dispatch } = this.props;
    const actions = bindActionCreators(AuthPopupActions, dispatch);

    return (
      <div>
        <Main authPopup={authPopup} actions={actions}/>
        <button onClick={actions.showPopup}>SHOW</button>
        <button onClick={actions.hidePopup}>HIDE</button>
      </div>
    )
  }
}

function select(state) {
  return {
    authPopup: state.mainstate.authPopup
  };
}

export default connect(select)(MainPage);
