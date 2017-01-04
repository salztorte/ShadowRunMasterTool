//@flow
import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';

const State = Record({
    isOpen: false,
});

export const initState: State = new State();

const actionHandlers:{[key: string]: State} = {
    [ACTION_TYPES.TOGGLE_MENU]: (state: State, action: Action): State => state.set('isOpen', action.isOpen),
};

export const reducer:State = (state: State = initState, action) => (
    action.type in actionHandlers ? actionHandlers[action.type](state, action) : state
);
