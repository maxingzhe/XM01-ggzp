import React from 'react';

import ReactDom from 'react-dom';

import {HashRouter,Route,Switch} from 'react-router-dom'

import {Provider} from 'react-redux'

import Login from './components/login';
import Main from './components/main';
import Register from './containers/register';
import store from './redux/store';
import './assets/less/index.less'
ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
  ,document.getElementById('root'));
