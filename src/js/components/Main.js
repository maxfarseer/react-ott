import React, { PropTypes, Component } from 'react';
import AuthPopup from './AuthPopup'

export default class Main extends Component {

  render() {
    const { authPopup: {isShown}, user: {login}, actions } = this.props;
    return (
      <div>
        Main page
        <AuthPopup isShown={isShown} actions={actions} login={login} />
      </div>
    );
  }
}
