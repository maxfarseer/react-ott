import React, { Component } from 'react';
import { Redirect, Router, Route } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

import App from './App'
import MainPage from './MainPage';
import ContactsPage from './ContactsPage';
import ProfilePage from './ProfilePage';
import AdminPage from './AdminPage';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

let createStoreWithMiddleware = applyMiddleware(logger)(createStore);

const store = createStoreWithMiddleware(rootReducer);

function requireLogin(store) {
  //console.log(store.getState());
  console.log('login require');
}

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router history={this.props.history}>
              <Route component={App}>
                <Route path='/main'
                       component={MainPage} />
                <Route path='/contacts'
                       component={ContactsPage} />
                <Route path='/profile'
                       component={ProfilePage} />
                <Route path='/admin'
                       component={AdminPage} onEnter={requireLogin.bind(this,store)}/>
                <Redirect from="/" to="/main" />
              </Route>
            </Router>
          }
        </Provider>
      </div>
    );
  }
}
