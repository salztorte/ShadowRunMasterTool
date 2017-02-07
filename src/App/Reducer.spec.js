import chai, { expect }from 'chai';
import chaiImmutable from 'chai-immutable';

import { initState, reducer } from './Reducer';
import { actions } from './Actions';

chai.use(chaiImmutable);

describe('App Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to
                   .deep
                   .equal(initState);
    });

    it('should handel TOGGLE_MENU', () => {
        const first = reducer(initState, actions.openMenu());
        const second = reducer(first, actions.closeMenu());

        expect(first).to
                     .have
                     .deep
                     .property('isOpen', true);

        expect(second).to
                     .have
                     .deep
                     .property('isOpen', false);
    });
});