import { Record, OrderedMap } from 'immutable';
import { ACTION_TYPES } from './ResourcesActions';
import { resourceName } from './BookIndex';

const State = Record({
    [resourceName]: OrderedMap(),
});

export const initStateResources = new State();

const actionHandlers = {
    [ACTION_TYPES.CLEAR_DATA]: state => state.set(resourceName, {}),
    [ACTION_TYPES.SET_DATA]: (state, { payload }) => state.set(resourceName, payload),
};


export const resourcesReducer = (state = initStateResources, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
