import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';

const State = Record({
    isOpen: false,
});

export const initState = new State();

const actionHandlers = {
    [ACTION_TYPES.OPEN_MENU]: state => state.set('isOpen', true),
    [ACTION_TYPES.CLOSE_MENU]: state => state.set('isOpen', false),
};


export const reducer = (state = initState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
