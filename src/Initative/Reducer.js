// @flow
import State, { Entry } from './InitState';
import { ACTION_TYPES as AT } from './Actions';

export const initState:State = new State();

const sortEntry = (a: Entry, b: Entry) => {
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
    const changedEntry:Array<Entry> = state.Entrys
                                           .shift()
                                           .set('iniValue', firstEntry.iniValue >= 10 ? firstEntry.iniValue - 10 : 0)
                                           .set('pass', firstEntry.pass + 1)
                                           .concatToArray(state.Entrys)
                                           .sort(sortEntry);
    return state.set('Entrys', changedEntry);
};
const changeIniVal:State = (state: State, key: number, val) => {
    const oldEntry = state.Entrys[key];
    let newIniVal = oldEntry.iniValue + val;
    if (newIniVal < 0)
        newIniVal = 0;

    const changedEntrys = state.Entrys
                               .splice(key, 1)[0]
        .set('iniValue', newIniVal)
        .concatToArray(state.Entrys)
        .sort(sortEntry);

    return state.set('Entrys', changedEntrys);
};
const actionHandlers = {
    [AT.TOGGLE_MODAL]: (state: State, action: Action): State => state.set('isOpen', state.isOpen.set(action.name, action.isOpen)),
    [AT.CHANGE_NEW_ENTRY]: (state: State, action: Action): State => state.update(['isError', 'newEntry'], false)
                                                                         .update(['NewEntry', action.key], action.value),
    [AT.SET_NEW_ENTRY]: setNewEntry,
    [AT.NEXT]: next,
    [AT.INCREASE_INI]: (state: State, action: Action): State => changeIniVal(state, action.key, 1),
    [AT.DECREASE_INI]: (state: State, action: Action): State => changeIniVal(state, action.key, -1),
};
export const reducer:State = (state: State = initState, action) => (
    action.type in actionHandlers ? actionHandlers[action.type](state, action) : state
);

