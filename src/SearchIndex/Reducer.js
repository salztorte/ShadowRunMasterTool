import { Record, OrderedMap } from 'immutable';
import { ACTION_TYPES } from './Actions';
import { searchIndexName, loadBookData } from './BookIndex';

const State = Record({
    [searchIndexName]: OrderedMap(),
});


export const initState = new State().set(searchIndexName, loadBookData);

const actionHandlers = {
    [ACTION_TYPES.CLEAR_DATA]: state => state.set(searchIndexName, {}),
    [ACTION_TYPES.SET_DATA]: (state, { payload }) => state.set(searchIndexName, payload),
};


export const reducer = (state = initState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
