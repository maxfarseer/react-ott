import React, { Component } from 'react';
import AuthPopup from '../components/AuthPopup';

export default class AuthPopupContainer extends Component {
  render() {
    const { user: {login}, actions, authPopup: {isShown} } = this.props;
    return (
      <div>
        <AuthPopup isShown={isShown} actions={actions} login={login} />
      </div>
    )
  }
}
