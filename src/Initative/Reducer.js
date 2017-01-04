// @flow
import { Record } from 'immutable';
import { ACTION_TYPES as AT } from './Actions';

export const Entry = Record({
    name: '',
    iniValue: 0,
    pass: 1,
});
export const isError = Record({
    newEntry: false,
});
export const isOpen = Record({
    newEntry: false,
    setIni: false,
});
const State = Record({
    isOpen: new isOpen(),
    isError: new isError(),
    NewEntry: new Entry(),
    Entrys: [
        new Entry({
            name: 'A',
            iniValue: 35,
            pass: 1,
        }),
        new Entry({
            name: 'B',
            iniValue: 20,
            pass: 1,
        }),
        new Entry({
            name: 'C',
            iniValue: 15,
            pass: 1,
        }),
    ],
});
export const initState:State = new State();


const sortEntry:boolean = (a: Entry, b: Entry) => {
    if (b.iniValue === 0)
        return 0;
    const x = a.pass - b.pass;
    return x === 0 ? b.iniValue - a.iniValue : x;
};
const setNewEntry:State = (state: State) => {
    if (state.NewEntry.name.trim().length === 0)
        return state.update(['isError', 'newEntry'], true);

    const sortArray = state.NewEntry
                           .concatToArray(state.Entrys)
                           .sort(sortEntry);
    return state.set('Entrys', sortArray)
                .set('NewEntry', new Entry());
};
const next:State = (state: State) => {
    const firstEntry:Entry = state.Entrys[0];
    const changedEntry: Array<Entry> = state.Entrys
                                            .shift()
                                            .set('iniValue', firstEntry.iniValue >= 10 ? firstEntry.iniValue - 10 : 0)
                                            .set('pass', firstEntry.pass + 1)
                                            .concatToArray(state.Entrys)
                                            .sort(sortEntry);
    return state.set('Entrys', changedEntry);
};
const changeIniVal: State = (state: State, key: number, val) => {
    const oldEntry = state.Entrys[key];
    const changedEntrys = state.Entrys
                               .splice(key, 1)[0]
                               .set('iniValue', oldEntry.iniValue + val)
                               .concatToArray(state.Entrys)
                               .sort(sortEntry);

    return state.set('Entrys', changedEntrys);
};
const actionHandlers = {
    [AT.TOGGLE_MODAL]: (state: State, action: Action): State => state.set('isOpen', state.isOpen.set(action.name, action.isOpen)),
    [AT.CHANGE_NEW_ENTRY]: (state: State, action: Action): State => (
        state.update(['isError', 'newEntry'], false)
             .update(['NewEntry', action.key], action.value)
    ),
    [AT.SET_NEW_ENTRY]: setNewEntry,
    [AT.NEXT]: next,
    [AT.INCREASE_INI]: (state: State, action: Action): State => changeIniVal(state, action.key, 1),
    [AT.DECREASE_INI]: (state: State, action: Action): State => changeIniVal(state, action.key, -1),
};

export const reducer:State = (state: State = initState, action) => {
    const { type } = action;
    if (type in actionHandlers)
        return actionHandlers[type](state, action);

    return state;
};
