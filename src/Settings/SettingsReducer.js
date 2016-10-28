import { Record } from 'immutable';
import { ACTION_TYPES } from './SettingsActions';

const State = Record({
    defaultDiceCount: 15,
    curLang: 'GER',
});

export const createSettingsInitState = (dice, lang) => {
    const _dice = (dice && dice !== 'undefined') ? dice : 15;
    const _lang = (lang && lang !== 'undefined') ? lang : 'GER';
    return new State().set('defaultDiceCount', _dice)
                      .set('curLang', _lang);
};

const actionHandlers = {
    [ACTION_TYPES.CHANGE_LANG]: (state, action) => state.set('curLang', action.payload),
    [ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT]: (state, action) => state.set('defaultDiceCount', action.payload),
};

export const settingsReducer = (state = createSettingsInitState(), action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
