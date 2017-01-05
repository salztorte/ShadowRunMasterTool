import { Record } from 'immutable';
import { CHANGE_LANG } from './Action';

const State = Record({
    translate: {},
});

export const getInitState = () => new State();

//export const createTranslationReducer = (firstLang: string, langJson: tmp) => {
//    const tunin = langJson[firstLang];
//    const initState: State = InitState.set('translate', tunin);
//
//    return (state: State = initState, action: Action) => {
//        if (action.type === CHANGE_LANG)
//            return state.set('translate', langJson[action.lang]);
//        return state;
//    };
//};

export const createTranslationReducer = (firstLang, langJson) => {
    const initState = getInitState().set('translate', langJson[firstLang]);

    return (state: State = initState, { type, lang }) => {
        if (type === CHANGE_LANG)
            return state.set('translate', langJson[lang]);
        return state;
    };
};
