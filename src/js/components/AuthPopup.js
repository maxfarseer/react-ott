import React, { PropTypes, Component } from 'react';

export default class AuthPopup extends Component {
  goAuthenticate() {
    console.log(React.findDOMNode(this.refs.login).value);
  }
  render() {
    const isShown = this.props.isShown;
    return (
      <div className={"auth-wrapper " + (isShown ? '': 'auth-wrapper_hide')}>
        <input className="auth-input" placeholder="login" ref="login"/>
        <button onClick={::this.goAuthenticate}>Log in</button>
      </div>
    );
  }
}
