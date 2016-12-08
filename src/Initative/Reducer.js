import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';


const Error = Record({
    entry: false,
});

const Entry = Record({
    name: '',
    iniValue: 0,
    pass: 0,
});

const State = Record({
    isNewEntryOpen: false,
    isError: new Error(),
    NewEntry: new Entry(),
    Entrys: [],
});
export const initState = new State();

const actionHandlers = {
    [ACTION_TYPES.TOGGEL_NEW_ENTRY]: (state, { payload }) => state.set('isNewEntryOpen', payload),
    [ACTION_TYPES.CHANGE_NEW_ENTRY]: (state, { key, value }) => state.set('NewEntry', state.NewEntry.set(key, value)),
    [ACTION_TYPES.SET_NEW_ENTRY]: (state) => {
        const sortArray = [...state.Entrys, state.NewEntry].sort((a, b) => b.iniValue - a.iniValue);
        return state.set('Entrys', sortArray);
    },
    [ACTION_TYPES.CHECK_INPUT]: (state, action) => (
        action.input.trim().length === 0 ? state.isError.set('entry', true) : state
    ),
    [ACTION_TYPES.NEW_ROUND]: () => ({}),
    [ACTION_TYPES.NEXT]: () => ({}),

};

export const reducer = (state = initState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
