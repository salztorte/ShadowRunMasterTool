//@flow
import { Record } from 'immutable';

export const Entry = Record({
    name: '',
    iniValue: 0,
    pass: 1,
});

export const isError = Record({
    newEntry: false,
    setIni: false,
});

export const isOpen = Record({
    newEntry: false,
    setIni: false,
});

export default Record({
    isOpen: new isOpen(),
    isError: new isError(),
    aktEntry: null,
    aktEntryIndex: -1,
    Entrys: [],
});
