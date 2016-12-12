// @flow
import { Record } from 'immutable';
import { ACTION_TYPES as AT } from './Actions';

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

const setNewEntry = (state) => {
    if (state.NewEntry.name.trim().length === 0) {
        return state.set('isError', Object.assign(state.isError, { newEntry: true }));
    }

    const sortArray = [...state.Entrys, state.NewEntry].sort((a, b) => b.iniValue - a.iniValue);
    return state.set('Entrys', sortArray)
                .set('NewEntry', new Entry());
};

const actionHandlers = {
    [AT.TOGGEL_NEW_ENTRY]: (state, action) => state.set('isNewEntryOpen', action.payload),
    [AT.CHANGE_NEW_ENTRY]: (state, action) => state.set('isError', Object.assign(state.isError, { newEntry: false }))
                                                   .set('NewEntry', state.NewEntry.set(action.key, action.value)),
    [AT.SET_NEW_ENTRY]: setNewEntry,
    [AT.NEW_ROUND]: () => ({}),
    [AT.NEXT]: () => ({}),
};

export const reducer: State = (state: State = initState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
