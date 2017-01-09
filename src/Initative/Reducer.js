// @flow
import State, { Entry } from './InitState';
import { ACTION_TYPES as AT } from './Actions';
import { createReducer } from '../tools';

export const initState:State = new State();

const sortEntry = (a: Entry, b: Entry) => {
    if (b.iniValue === 0)
        return 0;

    const x = a.pass - b.pass;
    return x === 0 ? b.iniValue - a.iniValue : x;
};
const setNewEntry:State = (state: State) => {
    if (state.aktEntry.name.trim().length === 0)
        return state.update(['isError', 'newEntry'], true);
    const sortArray = state.aktEntry
                           .concatToArray(state.Entrys)
                           .sort(sortEntry);
    return state.set('Entrys', sortArray)
                .set('aktEntry', new Entry());
};

const setIni:State = (state: State) => {
    if (state.aktEntry.iniValue <= 0)
        return state.update(['isError', 'setIni'], true);

    const Entrys = state.Entrys;
    const index = state.aktEntryIndex;
    Entrys[index] = state.aktEntry;

    if (index < Entrys.length - 1) {
        return state.set('Entrys', Entrys)
                    .set('aktEntryIndex', index + 1)
                    .set('aktEntry', Entrys[index + 1]);
    }

    return state.set('Entrys', Entrys)
                .set('aktEntryIndex', -1)
                .set('aktEntry', null)
                .sort(sortEntry)
                .update(['isOpen', 'setIni'], false);
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
    if (oldEntry.iniValue === 0)
        return state;

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
    [AT.OPEN_NEW_ENTRY]: (state: State): State => state.update(['isOpen', 'newEntry'], true)
                                                         .set('aktEntry', new Entry()),
    [AT.CLOSE_NEW_ENTRY]: (state: State): State => state.update(['isOpen', 'newEntry'], false)
                                                          .set('aktEntry', null),
    [AT.CHANGE_NEW_ENTRY]: (state: State, action: Action): State => state.update(['isError', 'newEntry'], false)
                                                                          .update(['aktEntry', 'name'], action.name),
    [AT.SET_NEW_ENTRY]: setNewEntry,

    [AT.OPEN_SET_INI]: (state: State): State => (
            (state.Entrys.length === 0) ? state : state.update(['isOpen', 'setIni'], true)
                                                       .set('aktEntry', state.Entrys[0])
                                                       .set('aktEntryIndex', 0)
        ),
    [AT.CLOSE_SET_INI]: (state: State): State => state.update(['isOpen', 'setIni'], false)
                                                        .set('aktEntryIndex', -1)
                                                        .set('aktEntry', null),
    [AT.CHANGE_ENTRY]: (state: State, action: Action): State => state.update(['isError', 'setIni'], false)
                                                                      .update(['aktEntry', 'iniValue'], action.value),
    [AT.SET_INI]: setIni,


    [AT.NEXT]: next,
    [AT.INCREASE_INI]: (state: State, action: Action): State => changeIniVal(state, action.key, 1),
    [AT.DECREASE_INI]: (state: State, action: Action): State => changeIniVal(state, action.key, -1),
//    [AT.CLOSE_CHANGE_ENTRY]: (state: State) => state.set('aktEntry', -1)
//                                                    .update(['isOpen', 'setIni'], false),
//    [AT.NEW_ROUND]: (state: State): State => state.set('aktEntry', 0)
//                                                  .update(['isOpen', 'setIni'], true),
};

export const reducer:State = createReducer(initState, actionHandlers);
