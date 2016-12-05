import { expect } from 'chai';
import { CHANGE_LANG } from './Action';
import { InitState, createTranslationReducer } from './Reducer';

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
        initState = InitState.set('translate', de);
    });


    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to.eql(initState);
    });

    it('should handel changeLang', () => {
        const incommingAction = {
            type: CHANGE_LANG,
            payload: 'en',
        };
        const expectResult = InitState.set('translate', en);

        expect(reducer(initState, incommingAction)).to.eql(expectResult);
    });
});
