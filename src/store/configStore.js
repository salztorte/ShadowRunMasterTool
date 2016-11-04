import { applyMiddleware, createStore, compose } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { rootReducer, initState } from './reducers';
import { searchTool } from '../Resources';
import subscriber from './subscriber';

const middleware = [
    routerMiddleware(hashHistory),
    thunk,
];
const enhancer = compose(
    applyMiddleware(...middleware),
    searchTool
);

const store = createStore(rootReducer, initState, enhancer);
//store.subscribe(() => subscriber(store));

export const configureStore = () => store;

export const configureHistory = _store => (
    syncHistoryWithStore(hashHistory, _store, {
        selectLocationState: state => state.routing.toJS(),
    })
);
