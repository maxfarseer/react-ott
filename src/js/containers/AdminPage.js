import React, { Component } from 'react';
import { connect } from 'react-redux';
import Admin from '../components/Admin';
import { showPopup } from '../actions/AppActions';

export default class AdminPage extends Component {
  static onEnter(store) {
    return (nextState, transition) => {
      const { user: { login }} = store.getState().mainstate;
      if (!login) {
        store.dispatch(showPopup());
        transition.to('/');
      }
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

