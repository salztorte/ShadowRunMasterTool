import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';

const State = Record({
    isOpen: false,
});

export const appInitState = new State();

const actionHandlers = {
    [ACTION_TYPES.OPEN_MENU]: state => state.set('isOpen', true),
    [ACTION_TYPES.CLOSE_MENU]: state => state.set('isOpen', false),
};


export const appReducer = (state = appInitState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
