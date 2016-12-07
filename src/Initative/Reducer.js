import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';


const State = Record({
    isNewEntryOpen: false,
    Entrys: [],
});
export const initState = new State();

const actionHandlers = {
    [ACTION_TYPES.OPEN_NEW_ENTRY]: state => state.set('isNewEntryOpen', true),
    [ACTION_TYPES.CLOSE_NEW_ENTRY]: state => state.set('isNewEntryOpen', false),
    [ACTION_TYPES.SET_NEW_ENTRY]: (state, action) => {
        const entrys = state.Entrys;
        entrys.push({
            name: action.name,
            iniValue: action.iniValue,
            pass: 0,
        });
        return state.set('Entrys', entrys.sort((a, b) => b.iniValue - a.iniValue));
    },
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