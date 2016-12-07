import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';

const State = Record({
    diceCount: 15,
    rollResult: [0],
    isPopoverOpen: false,
});

export const initState = new State();

const actionHandlers = {
    [ACTION_TYPES.CHANGE_DICE_COUNT]: (state, action) => state.set('diceCount', action.payload),
    [ACTION_TYPES.ROLL_DICE]: (state, action) => state.set('rollResult', action.payload),
    [ACTION_TYPES.CLEAR_ROLLS]: state => state.set('rollResult', []),
    [ACTION_TYPES.SHOW_POPOVER]: state => state.set('isPopoverOpen', true),
    [ACTION_TYPES.HIDE_POPOVER]: state => state.set('isPopoverOpen', false),
};

export const reducer = (state = initState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};