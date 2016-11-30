import { Record, OrderedMap } from 'immutable';
import { ACTION_TYPES } from './SearchIndexActions';
import { searchIndexName, loadBookData } from './BookIndex';

const State = Record({
    [searchIndexName]: OrderedMap(),
});


export const initStateSearchIndex = new State().set(searchIndexName, loadBookData);

const actionHandlers = {
    [ACTION_TYPES.CLEAR_DATA]: state => state.set(searchIndexName, {}),
    [ACTION_TYPES.SET_DATA]: (state, { payload }) => state.set(searchIndexName, payload),
};


export const searchIndexReducer = (state = initStateSearchIndex, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
