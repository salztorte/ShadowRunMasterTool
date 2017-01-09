//@flow
import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';
import { createReducer } from '../tools';

const State = Record({
    isOpen: false,
});

export const initState: State = new State();

const actionHandlers:{[key: string]: State} = {
    [ACTION_TYPES.TOGGLE_MENU]: (state: State, action: Action): State => state.set('isOpen', action.isOpen),
};

export const reducer: State = createReducer(initState, actionHandlers);
