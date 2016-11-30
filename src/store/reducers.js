import { combineReducers } from 'redux';
import { reducer as search } from 'redux-search';

import { searchIndexReducer } from '../SearchIndex';
import { routing } from './routingReducer';
import { appReducer } from '../App';
import { diceReducer, diceInitState } from '../Dice';
import { createTranslationReducer } from '../translation';
import { settingsReducer, createSettingsInitState } from '../Settings';
import languages from './languages';

const defaultDiceCount = localStorage.getItem('defaultDice');
const curLang = localStorage.getItem('lang');
const settingsInitState = createSettingsInitState(defaultDiceCount, curLang);


//ich muss den initState so setzen da ich mit combineReducers arbeite
export const initState = {
    app: undefined,
    dice: diceInitState.set('diceCount', settingsInitState.defaultDiceCount),
    resources: undefined,
    routing: undefined,
    search: undefined,
    setting: settingsInitState,
    translation: undefined,
};


export const rootReducer = combineReducers({
    app: appReducer,
    dice: diceReducer,
    resources: searchIndexReducer,
    routing,
    search,
    setting: settingsReducer,
    translation: createTranslationReducer(settingsInitState.curLang, languages),
});
