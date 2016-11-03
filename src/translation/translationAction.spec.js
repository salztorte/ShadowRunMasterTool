import { expect } from 'chai';
import { CHANGE_LANG, changeLang } from './translationAction';

describe('translation Action', () => {
    it('Change Lang', () => {
        const expectedAction = {
            type: CHANGE_LANG,
            payload: 'de',
        };
        expect(changeLang('de')).to.eql(expectedAction);
    });
});
