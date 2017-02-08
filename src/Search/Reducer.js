// @flow
import { Record, OrderedMap } from 'immutable';
//import { ACTION_TYPES } from './Actions';
import { searchIndexName, loadBookData } from '../Resources/BookIndex';
import { createReducer } from '../tools';

export const State = Record({
    [searchIndexName]: OrderedMap(),
});

export const initState = new State().set(searchIndexName, loadBookData);

const actionHandlers = {
    CLEAR_DATA: (state: State) => state.set(searchIndexName, {}),
    SET_DATA: (state: State, { payload }: Actions) => (
        state.set(searchIndexName, payload)
//             .set(searchIndexName, {})
    ),
};

export const reducer:State = createReducer(initState, actionHandlers);
