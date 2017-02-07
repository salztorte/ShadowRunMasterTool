// @flow
import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';
import { createReducer } from '../tools';

const State = Record({
    defaultDiceCount: 15,
    curLang: 'GER',
});

export const createInitState: State = (dice: number = 15, lang: string= 'GER') => (
    new State().set('defaultDiceCount', dice)
                      .set('curLang', lang)
);

const actionHandlers: {[key: string]: State} = {
    [ACTION_TYPES.CHANGE_LANG]: (state: State, action: Action) => state.set('curLang', action.lang),
    [ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT]: (state: State, action: Action) => state.set('defaultDiceCount', action.count),
};

export const reducer: State = createReducer(createInitState(), actionHandlers);
