// @flow
import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';
import type { Action } from './Actions';

const State = Record({
    diceCount: 15,
    rollResult: [0],
    isPopoverOpen: false,
});

export const initState:State = new State();

const rollDice = (diceCount):number[] => {
    const result = [];
    for (let i = 0; i < diceCount; i++) {
        result.push(Math.floor((Math.random() * 6) + 1));
    }
    result.sort((a, b) => b - a)
    return result;
};


const actionHandlers = {
    [ACTION_TYPES.CHANGE_DICE_COUNT]: (state:State, action:Action) => state.set('diceCount', action.payload)
                                                                           .set('rollResult', []),
    [ACTION_TYPES.ROLL_DICE]: state => state.set('rollResult', rollDice(state.diceCount)),
    [ACTION_TYPES.CLEAR_ROLLS]: state => state.set('rollResult', []),
    [ACTION_TYPES.SHOW_POPOVER]: (state, action) => state.set('isPopoverOpen', action.payload),
};

export const reducer = (state:State = initState, action:Action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
