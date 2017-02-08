// @flow
import { combineReducers } from 'redux';
import { reducer as search } from 'redux-search';

import { reducer as searchIndexReducer } from '../Search';
import { routing } from './routingReducer';
import { reducer as appReducer } from '../App';
import { reducer as diceReducer, initState as diceInitState } from '../Dice';
import { reducer as iniReducer } from '../Initative';
import { createTranslationReducer } from '../translation';
import { reducer as settingsReducer, createInitState } from '../Settings';
import languages from './languages';

const defaultDiceCount = localStorage.getItem('defaultDice')|15;
const curLang = localStorage.getItem('lang');
const settingsInitState = createInitState(defaultDiceCount, curLang);


//ich muss den initState so setzen da ich mit combineReducers arbeite
export const initState = {
    app: undefined,
    dice: diceInitState.set('diceCount', settingsInitState.defaultDiceCount),
    searchIndex: undefined,
    routing: undefined,
    search: undefined,
    setting: settingsInitState,
    translation: undefined,
    initative: undefined,
};

console.log(settingsInitState.curLang, languages);
export const rootReducer = combineReducers({
    app: appReducer,
    dice: diceReducer,
    searchIndex: searchIndexReducer,
    routing,
    search,
    setting: settingsReducer,
    translation: createTranslationReducer(settingsInitState.curLang, languages),
    initative: iniReducer,
});
