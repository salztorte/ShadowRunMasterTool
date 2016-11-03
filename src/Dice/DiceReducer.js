import { Record } from 'immutable';
import { ACTION_TYPES } from './DiceActions';

const State = Record({
    diceCount: 15,
    rollResult: [],
    isDialogOpen: false,
});

export const diceInitState = new State();

const actionHandlers = {
    [ACTION_TYPES.CHANGE_DICE_COUNT]: (state, action) => state.set('diceCount', action.payload),
    [ACTION_TYPES.ROLL_DICE]: (state, action) => state.set('rollResult', action.payload),
    [ACTION_TYPES.CLEAR_ROLLS]: state => state.set('rollResult', []),
    [ACTION_TYPES.SHOW_MODAL]: state => state.set('isDialogOpen', true),
    [ACTION_TYPES.HIDE_MODAL]: state => state.set('isDialogOpen', false),
};

export const diceReducer = (state = diceInitState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
