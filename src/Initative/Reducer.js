import { Record } from 'immutable';
import { ACTION_TYPES } from './Action';

const State = Record({
    isModalOpen: false,
});

export const initState = new State();

const actionHandlers = {
    [ACTION_TYPES.OPEN_MODAL]: state => state.set('isModalOpen', true),
    [ACTION_TYPES.CLOSE_MODAL]: state => state.set('isModalOpen', false),
};

export const reducer = (state = initState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
