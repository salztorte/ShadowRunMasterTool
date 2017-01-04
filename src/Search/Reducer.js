// @flow weak
import { Record, OrderedMap } from 'immutable';
import { ACTION_TYPES } from './Actions';
import { searchIndexName, loadBookData } from '../Resources/BookIndex';

export const State = Record({
    [searchIndexName]: OrderedMap(),
});

export const initState = new State().set(searchIndexName, loadBookData);

const actionHandlers = {
    [ACTION_TYPES.CLEAR_DATA]: state => state.set(searchIndexName, {}),
    [ACTION_TYPES.SET_DATA]: (state, { payload }) => state.set(searchIndexName, payload)
                                                          .set(searchIndexName, {}),
};


export const reducer: State = (state = initState, action) => {
    const { type } = action;
    if (type in actionHandlers)
        return actionHandlers[type](state, action);

    return state;
};
