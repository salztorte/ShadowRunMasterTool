// @flow
import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';
import type { Action } from './Actions';

const State = Record({
    isOpen: false,
});

export const initState: State = new State();

const actionHandlers = {
    [ACTION_TYPES.TOGGLE_MENU]: (state: State, action: Action) => state.set('isOpen', action.payload),
};

export const reducer : State= (state: State = initState, action: Action) => {
    const type: string  = action.type;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
