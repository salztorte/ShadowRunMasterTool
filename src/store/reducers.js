import { combineReducers } from 'redux';
import { reducer as search } from 'redux-search';

import { resourcesReducer } from '../Resources';
import { routing } from './routingReducer';
import { appReducer } from '../App';
import { diceReducer, diceInitState } from '../Dice';
import { createTranslationReducer, translationInitState } from '../translation';
import { settingsReducer, createSettingsInitState } from '../Settings';
import languages from './languages';

const defaultDiceCount = localStorage.getItem('defaultDice');
const curLang = localStorage.getItem('lang');
const settingsInitState = createSettingsInitState(defaultDiceCount, curLang);

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
    resources: resourcesReducer,
    routing,
    search,
    setting: settingsReducer,
    translation: createTranslationReducer(settingsInitState.curLang, languages),
});
