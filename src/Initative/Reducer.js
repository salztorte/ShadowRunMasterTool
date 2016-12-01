import { Record } from 'immutable';
import { ACTION_TYPES } from './InitativeAction';

const State = Record({
    entry: [],
});

export const initativeInitState = new State();

const actionHandlers = {

};


export const initativeReducer = (state = initativeInitState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
