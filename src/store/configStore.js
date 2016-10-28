import { applyMiddleware, createStore, compose } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { rootReducer, initState } from './reducers';
import { searchTool } from '../Resources';


const middleware = [
    routerMiddleware(hashHistory),
    thunk,
];

const enhancer = compose(
    applyMiddleware(...middleware),
    searchTool
);

const store = createStore(rootReducer, initState, enhancer);
const preValue = {
    lang: localStorage.getItem('lang'),
    defaultDice: localStorage.getItem('defaultDice'),
};
const handleChange = () => {
    const state = store.getState();
    const curVal = {
        lang: state.translation.curLang,
        defaultDice: state.dice.defaultCount,
    };

    if (curVal.lang !== preValue.lang) {
        preValue.lang = curVal.lang;
        localStorage.setItem('lang', curVal.lang);
    }

    if (`${curVal.defaultDice}` != preValue.defaultDice) {
        preValue.defaultDice = curVal.defaultDice;
        localStorage.setItem('defaultDice', curVal.defaultDice);
    }
};

store.subscribe(handleChange);

export const configureStore = () => store;

export const configureHistory = _store => (
    syncHistoryWithStore(hashHistory, _store, {
        selectLocationState: state => state.routing.toJS(),
    })
);
