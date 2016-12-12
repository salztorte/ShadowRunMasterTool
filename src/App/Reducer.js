//@flow
import { Record } from 'immutable';
import { ACTION_TYPES } from './Actions';

const State = Record({
    isOpen: false,
});

export const initState: State = new State();

const actionHandlers:{[key:string]: State} = {
    [ACTION_TYPES.TOGGLE_MENU]: (state:State, action:Action):State => state.set('isOpen', action.isOpen)
};

export const reducer = (state:State = initState, action:Action):State => {
    const type:string = action.type;
    if (type in actionHandlers) {
        return actionHandlers[type](state, action);
    }
    return state;
};
