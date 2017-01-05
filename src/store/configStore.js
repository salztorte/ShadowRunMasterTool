// @flow
import { applyMiddleware, createStore, compose } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { rootReducer, initState } from './reducers';
import { searchTool } from '../Search';
import subscriber from './subscriber';

const middleware: Array<Function> = [
    routerMiddleware(hashHistory),
    thunk,
];
const enhancer = compose(
    applyMiddleware(...middleware),
    searchTool
);

export const Store = createStore(rootReducer, initState, enhancer);
Store.subscribe(() => subscriber(Store));

//export const configureStore = () => store;
export const configureHistory = (store: Store) => (
    syncHistoryWithStore(hashHistory, store, {
        selectLocationState: state => state.routing.toJS(),
    })
);
