//@flow
import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';
import { createReducer } from '../tools';

const State = Record({
    diceCount: 15,
    rollResult: [],
    isPopoverOpen: false,
});

export const initState:State = new State();

const rollDice = (diceCount: number): number[]=> {
    const result = [];
    for (let i = 0; i < diceCount; i++)
        result.push(Math.floor((Math.random() * 6) + 1));

    result.sort((a, b) => b - a);
    return result;
};

const actionHandlers:{[key: string]: State} = {
    [ACTION_TYPES.CHANGE_DICE_COUNT]: (state: State, action: Action) => state.set('diceCount', action.count)
                                                                           .set('rollResult', []),
    [ACTION_TYPES.ROLL_DICE]: (state: State) => state.set('rollResult', rollDice(state.diceCount))
                                                     .set('isPopoverOpen', true),
    [ACTION_TYPES.CLEAR_ROLLS]: (state: State) => state.set('rollResult', []),
    [ACTION_TYPES.TOGGLE_POPOVER]: (state: State, action: Action) => state.set('isPopoverOpen', action.isOpen),
};


export const reducer: State = createReducer(initState, actionHandlers);
