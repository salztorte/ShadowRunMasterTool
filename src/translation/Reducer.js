import { Record } from 'immutable';
import { CHANGE_LANG } from './Action';

const State = Record({
    translate: {},
});

export const InitState = new State();


export const createTranslationReducer = (firstLang, langJson) => {
    const initState = InitState.set('translate', langJson[firstLang]);

    return (state = initState, { type, payload }) => {
        if (type === CHANGE_LANG) {
            return state.set('translate', langJson[payload]);
        }
        return state;
    };
};
