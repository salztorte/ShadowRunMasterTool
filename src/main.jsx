//import styles
import 'grommet/scss/vanilla/index';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import { configureStore, configureHistory } from './store';

import App from './App';
import Search from './Search';
import Impressum from './Impressum';
import Initative from './Initative';
import Dice from './Dice';
import Settings from './Settings';

const store = configureStore();
const history = configureHistory(store);
const rootEl = document.getElementById('app');



render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRedirect to='/initative' />
                <Route path='search' component={Search} />
                <Route path='dicecup' component={Dice} />
                <Route path='initative' component={Initative} />
                <Route path='settings' component={Settings} />
                <Route path='impressum' component={Impressum} />
            </Route>
        </Router>
    </Provider>
    , rootEl);

