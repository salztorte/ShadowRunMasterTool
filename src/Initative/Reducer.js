// @flow
import { Record } from 'immutable';
import { ACTION_TYPES as AT } from './Actions';


const Entry = Record({
    name: '',
    iniValue: 0,
    pass: 1,
});

const isError = Record({
    newEntry: false,
});

const State = Record({
    isNewEntryOpen: false,
    isError: new isError(),
    NewEntry: new Entry(),
    Entrys: [
        new Entry({
            name: 'A',
            iniValue: 0,
            pass: 0,
        }),
        new Entry({
            name: 'B',
            iniValue: 0,
            pass: 0,
        }),
        new Entry({
            name: 'C',
            iniValue: 0,
            pass: 0,
        }),
    ],
});

export const initState:State = new State();

const setNewEntry = (state) => {
    if (state.NewEntry.name.trim().length === 0) {
        const newError = state.isError.set('newEntry', true);
        return state.set('isError', newError);
    }

    const sortArray = [...state.Entrys, state.NewEntry].sort((a, b) => b.iniValue - a.iniValue);
    return state.set('Entrys', sortArray)
                .set('NewEntry', new Entry());
};

const actionHandlers = {
    [AT.TOGGEL_NEW_ENTRY]: (state:State, action:Action) => state.set('isNewEntryOpen', action.isOpen),
    [AT.CHANGE_NEW_ENTRY]: (state:State, action:Action) => (
        state.set('isError', state.isError.set('newEntry', false))
             .set('NewEntry', state.NewEntry.set(action.key, action.value))
    ),
    [AT.SET_NEW_ENTRY]: setNewEntry,
    [AT.NEW_ROUND]: () => ({}),
    [AT.NEXT]: () => ({}),
};

export const reducer:State = (state:State = initState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
