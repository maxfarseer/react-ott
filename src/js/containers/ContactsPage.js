import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as TodoActions from '../actions/TodoActions';

import Contacts from '../components/Contacts';

class ContactsPage extends Component {
  render() {
    //props here
    return (
      <div>
        <Contacts />
      </div>
    )
  }
}

function select(state) {
  return {
    todos: state.todos
  };
}

export default connect(select)(ContactsPage);
