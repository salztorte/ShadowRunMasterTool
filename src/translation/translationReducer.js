import { Record } from 'immutable';
import { CHANGE_LANG } from './translationAction';

const State = Record({
    translate: {},
});

export const translationInitState = new State();


export const createTranslationReducer = (firstLang, langJson) => {
    const initState = translationInitState.set('translate', langJson[firstLang]);

    return (state = initState, { type, payload }) => {
        if (type === CHANGE_LANG) {
            return state.set('translate', langJson[payload]);
        }
        return state;
    };
};
