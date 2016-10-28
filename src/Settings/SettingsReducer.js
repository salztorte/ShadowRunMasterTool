import { Record } from 'immutable';
import { ACTION_TYPES } from './SettingsActions';

const State = Record({
  defaultDiceCount: 15,
  curLang: 'GER'
});

//export const settingsInitState = new State();

export const createSettingsInitState = (dice = 15, lang = 'GER') => (
  new State().set('defaultDiceCount', dice)
             .set('curLang', lang)
);

const actionHandlers = {
  [ACTION_TYPES.CHANGE_LANG]: (state, action) => state.set('diceCount', action.payload),
  [ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT]: (state, action) => state.set('defaultDiceCount', action.payload),
};

export const settingsReducer = (state = createSettingsInitState(), action) => {
  const { type } = action;
  if (type in actionHandlers) {
    return actionHandlers[type](state, action);
  }
  return state;
};
