import { Record } from 'immutable';

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

export default Record({
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
