import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contacts from '../components/Contacts';

export default class ContactsPage extends Component {
  render() {
    return (
      <div>
        <Contacts />
      </div>
    )
  }
}
