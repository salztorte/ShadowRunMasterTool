import { expect } from 'chai';
import { reducer, createInitState } from './Reducer';
import { ACTION_TYPES } from './Actions';

describe('SettingsReducer', () => {
    it('should create the rigth initState', () => {
        const init = createInitState();
        expect(init.defaultDiceCount).to.be.equal(15);
        expect(init.curLang).to.be.equal('GER');
    });
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to.be.eql(createInitState());
    });

    it('should handel CHANGE_DEFAULT_DICE_COUNT', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT,
            payload: 20,
        };
        const inState = createInitState();
        expect(reducer(inState, inAction).defaultDiceCount).to.be.equal(20);
    });

    it('should handel CHANGE_LANG', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_LANG,
            payload: 'EN',
        };
        const inState = createInitState();
        expect(reducer(inState, inAction).curLang).to.be.equal('EN');
    });
});
