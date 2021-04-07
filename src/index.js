import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

const store = createStore();
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Switch>
          <Route path={'/main'} component={App}></Route>
          <Route path={'/home'} component={App}></Route>
        </Switch>
    </Router>
    </Provider>, document.getElementById('root'));
