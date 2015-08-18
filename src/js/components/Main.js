import React, { PropTypes, Component } from 'react';
import AuthPopup from './AuthPopup'

export default class Main extends Component {

  render() {
    const { authPopup: {isShown}, user: {login}, actions } = this.props;
    return (
      <div>
        <p>Main page content here</p>
        <p>Welcome, this is Redux implementation of FLUX </p>
        <p>Hot-reload magic by Webpack</p>
        <p>If you change source file, web version changes immediately</p>
        <AuthPopup isShown={isShown} actions={actions} login={login} />
      </div>
    );
  }
}
