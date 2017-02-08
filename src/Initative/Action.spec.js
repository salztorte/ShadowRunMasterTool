import { expect }from 'chai';
import { actions, ACTION_TYPES } from './Actions';


describe('Initative Actions', () => {
    it('ACTION_TYPES', () => {
        expect(ACTION_TYPES).to.be.eql({
            OPEN_NEW_ENTRY: 'OPEN_NEW_ENTRY',
            CLOSE_NEW_ENTRY: 'CLOSE_NEW_ENTRY',
            CHANGE_NEW_ENTRY: 'CHANGE_NEW_ENTRY',
            SET_NEW_ENTRY: 'SET_NEW_ENTRY',

            OPEN_SET_INI: 'OPEN_SET_INI',
            CLOSE_SET_INI: 'CLOSE_SET_INI',
            CHANGE_ENTRY: 'CHANGE_ENTRY',
            SET_INI: 'SET_INI',

            CHANGE_ENTRY: 'CHANGE_ENTRY',
            CLOSE_CHANGE_ENTRY: 'CLOSE_CHANGE_ENTRY',

            INCREASE_INI: 'INCREASE_INI',
            DECREASE_INI: 'DECREASE_INI',
            NEW_ROUND: 'NEW_ROUND',
            NEXT: 'NEXT',
        })
    });

    it('openNewEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.OPEN_NEW_ENTRY,
        };
        expect(actions.openNewEntry()).to.be.eql(expectedAction);
    });

    it('closeNewEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLOSE_NEW_ENTRY,
        };
        expect(actions.closeNewEntry()).to.be.eql(expectedAction);
    });

    it('changeNewEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.CHANGE_NEW_ENTRY,
            name: 'test123'
        };
        expect(actions.changeNewEntry('test123')).to.be.eql(expectedAction);
    });

    it('setNewEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.SET_NEW_ENTRY,
        };
        expect(actions.setNewEntry()).to.be.eql(expectedAction);
    });

    it('openSetIni', () => {
        const expectedAction = {
            type: ACTION_TYPES.OPEN_SET_INI,

        };
        expect(actions.openSetIni()).to.be.eql(expectedAction);
    });

    it('closeSetIni', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLOSE_SET_INI,
        };
        expect(actions.closeSetIni()).to.be.eql(expectedAction);
    });

    it('changeEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.CHANGE_ENTRY,
            value: 'Tunin',
        };
        expect(actions.changeEntry('Tunin')).to.be.eql(expectedAction);
    });

    it('setIni', () => {
        const expectedAction = {
            type: ACTION_TYPES.SET_INI,
        };
        expect(actions.setIni()).to.be.eql(expectedAction);
    });

    it('increaseIni', () => {
        const expectedAction = {
            type: ACTION_TYPES.INCREASE_INI,
            key: 15,
        };
        expect(actions.increaseIni(15)).to.be.eql(expectedAction);
    });

    it('decreaseIni', () => {
        const expectedAction = {
            type: ACTION_TYPES.DECREASE_INI,
            key: 15
        };
        expect(actions.decreaseIni(15)).to.be.eql(expectedAction);
    });

    it('newRound', () => {
        const expectedAction = {
            type: ACTION_TYPES.NEW_ROUND,

        };
        expect(actions.newRound()).to.be.eql(expectedAction);
    });

    it('next', () => {
        const expectedAction = {
            type: ACTION_TYPES.NEXT,
        };
        expect(actions.next()).to.be.eql(expectedAction);
    });

    it('closeChangeEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLOSE_CHANGE_ENTRY,
            value: 15
        };
        expect(actions.closeChangeEntry(15)).to.be.eql(expectedAction);
    });
});
