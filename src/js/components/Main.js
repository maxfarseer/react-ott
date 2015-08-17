import React, { PropTypes, Component } from 'react';
import AuthPopup from './AuthPopup'

export default class Main extends Component {

  render() {
    const { isShown } = this.props.authPopup;
    return (
      <div>
        Main page
        <AuthPopup isShown={isShown} />
      </div>
    );
  }
}
