// @flow
import { applyMiddleware, createStore, compose } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { rootReducer, initState } from './reducers';
import { searchTool } from '../Search';
import subscriber from './subscriber';

const logger = function (store) {
    return function (next) {
        return function (action) {
            console.log('dispatching', action);
            const result = next(action);
            console.log('next state', store.getState());
            return result;
        };
    };
};


const middleware:Array<Function> = [
    logger,
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
export const configureHistory = (store:Store) => (
    syncHistoryWithStore(hashHistory, store, {
        selectLocationState: state => state.routing.toJS(),
    })
);
