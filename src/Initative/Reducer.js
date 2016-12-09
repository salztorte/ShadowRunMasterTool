// @flow
import { Record } from 'immutable';
import { ACTION_TYPES as AT } from './Actions';
import type { Action } from './Actions'

const Entry = Record({
    name: '',
    iniValue: 0,
    pass: 0,
});

const State = Record({
    isNewEntryOpen: false,
    isError: {
        newEntry: false,
    },
    NewEntry: new Entry(),
    Entrys: [],
});

export const initState: State = new State();

const setNewEntry = (state : State) => {
    if (state.NewEntry.name.trim().length === 0) {
        return state.set('isError', Object.assign(state.isError, { newEntry: true }));
    }

    const sortArray = [...state.Entrys, state.NewEntry].sort((a, b) => b.iniValue - a.iniValue);
    return state.set('Entrys', sortArray)
                .set('NewEntry', new Entry());
};

const actionHandlers = {
    [AT.TOGGEL_NEW_ENTRY]: (state, action: Action) => state.set('isNewEntryOpen', action.payload),
    [AT.CHANGE_NEW_ENTRY]: (state, action: Action) => state.set('isError', Object.assign(state.isError, { newEntry: false }))
                                                           .set('NewEntry', state.NewEntry.set(action.key, action.value)),
    [AT.SET_NEW_ENTRY]: setNewEntry,
    [AT.NEW_ROUND]: () => ({}),
    [AT.NEXT]: () => ({}),
};

export const reducer = (state: State = initState, action: Action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
