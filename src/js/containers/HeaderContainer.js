import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

class HeaderContainer extends Component {
  render() {
    const { user: {login} } = this.props;
    return (
      <div>
        <Header login={login} />
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
