import { CHANGE_LANG } from './translationAction';
import { translationInitState, createTranslationReducer} from './translationReducer';

const de = {
    hello: 'Hallo',
};
const en = {
    hello: 'Hello',
};
const lang = {
    de,
    en,
};

describe('translate reducer', () => {
    let reducer;
    let initState;
    beforeEach(() => {
        reducer = createTranslationReducer('de', lang);
        initState = translationInitState.set('translate', de);
    });


    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initState);
    });

    it('should handel changeLang', () => {
        const incommingAction = {
            type: CHANGE_LANG,
            payload: 'en',
        };
        const expectResult = translationInitState.set('translate', en);

        expect(reducer(initState, incommingAction)).toEqual(expectResult);
    });
});