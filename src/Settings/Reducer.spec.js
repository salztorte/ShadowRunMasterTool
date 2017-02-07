import chai, { expect }from 'chai';
import chaiImmutable from 'chai-immutable';

import { createInitState, reducer } from './Reducer';
import { actions } from './Actions';

chai.use(chaiImmutable);

describe('App Reducer', () => {
    let initState;
    before(() => {
        initState = createInitState();
    });
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to
                                      .deep
                                      .equal(initState);
    });

    it('should handel CHANGE_LANG', () => {
        const first = reducer(initState, actions.changeLang('EN'));
        const second = reducer(first, actions.changeLang('GER'));

        expect(first).to
                     .have
                     .deep
                     .property('curLang', 'EN');

        expect(second).to
                      .have
                      .deep
                      .property('curLang', 'GER');
    });

    it('should handel CHANGE_LANG', () => {
        const first = reducer(initState, actions.changeDefaultDiceCount(20));
        const second = reducer(first, actions.changeDefaultDiceCount(8));

        expect(first).to
                     .have
                     .deep
                     .property('defaultDiceCount', 20);

        expect(second).to
                      .have
                      .deep
                      .property('defaultDiceCount', 8);
    });
});