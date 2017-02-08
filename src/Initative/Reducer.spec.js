import chai, { expect }from 'chai';
import chaiImmutable from 'chai-immutable';

import { initState, reducer, Entry } from './Reducer';
import { actions } from './Actions';

chai.use(chaiImmutable);

describe('Initiative Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to
                                      .deep
                                      .equal(initState);
    });

    it('should handel OPEN_NEW_ENTRY', () => {
        const first = reducer(initState, actions.openNewEntry());

        expect(first.isOpen.newEntry).to.be.true;
        expect(first).to
                     .have
                     .deep
                     .property('aktEntry', new Entry());
    });

    it('should handel CLOSE_NEW_ENTRY', () => {
        const first = reducer(initState, actions.closeNewEntry());

        expect(first.isOpen.newEntry).to.be.false;
        expect(first).to
                     .have
                     .deep
                     .property('aktEntry', null);
    });

    it('should handel CHANGE_NEW_ENTRY', () => {
        const first = reducer(initState, actions.openNewEntry());
        const second = reducer(first, actions.changeNewEntry('Tunin'));

        expect(second.aktEntry).to
                              .have
                              .deep
                              .property('name', 'Tunin');
    });

//    it('should handel SET_NEW_ENTRY', () => {
//        const open = reducer(initState, actions.openNewEntry());
//        const change = reducer(open, actions.changeNewEntry('Tunin'));
//        const thrid = reducer(change, actions.openSetIni());
//    });
});