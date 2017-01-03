// @flow
import { Record } from 'immutable';
import { ACTION_TYPES as AT } from './Actions';

export const Entry = Record({
    name: '',
    iniValue: 0,
    pass: 0,
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
            iniValue: 25,
            pass: 0,
        }),
        new Entry({
            name: 'B',
            iniValue: 20,
            pass: 0,
        }),
        new Entry({
            name: 'C',
            iniValue: 15,
            pass: 0,
        }),
    ],
});

export const initState:State = new State();

const sortEntry:boolean = (a, b) => b.iniValue - a.iniValue;

const setNewEntry:State = (state:State)=> {
    if (state.NewEntry.name.trim().length === 0) {
        const newError = state.isError.set('newEntry', true);
        return state.set('isError', newError);
    }

    const sortArray = [...state.Entrys, state.NewEntry].sort(sortEntry);
    return state.set('Entrys', sortArray)
                .set('NewEntry', new Entry());
};

const next = (state:State) => {
    const entrys:Array<Entry> = state.Entrys;
    let iniValue:number = entrys[0].iniValue;
    if (iniValue < 10) {
        iniValue = 0;
    } else {
        iniValue -= 10;
    }

    const firstEntry:Entry = entrys.shift().set('iniValue', iniValue);
    return state.set('Entrys', [...entrys, firstEntry].sort(sortEntry));
};

const actionHandlers = {
    [AT.TOGGLE_MODAL]: (state:State, action:Action) => state.set('isOpen', state.isOpen.set(action.name, action.isOpen)),
    [AT.CHANGE_NEW_ENTRY]: (state:State, action:Action) => (
        state.set('isError', state.isError.set('newEntry', false))
             .set('NewEntry', state.NewEntry.set(action.key, action.value))
    ),
    [AT.SET_NEW_ENTRY]: setNewEntry,
    [AT.NEXT]: next,
};

export const reducer:State = (state:State = initState, action) => {
    const { type } = action;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
