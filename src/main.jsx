//import styles
import 'grommet/scss/vanilla/index';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import { configureStore, configureHistory } from './store';

import App from './App';
//import Search from './Search';
//import Impressum from './Impressum';
//import Dice from './Dice';
import Settings from './Settings';

const store = configureStore();
const history = configureHistory(store);
const rootEl = document.getElementById('app');


//                <IndexRedirect to="/dicecup" />
//                <Route path="search" component={Search} />
//                <Route path="dicecup" component={Dice} />
//                <Route path="settings" component={Settings} />
//                <Route path="impressum" component={Impressum} />

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRedirect to="/settings" />
                <Route path="settings" component={Settings} />
            </Route>
        </Router>
    </Provider>
    , rootEl);
