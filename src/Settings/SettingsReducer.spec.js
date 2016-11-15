import { expect } from 'chai';
import { settingsReducer, createSettingsInitState } from './SettingsReducer';
import { ACTION_TYPES } from './SettingsActions';

describe('SettingsReducer', () => {
    it('should create the rigth initState', () => {
        const init = createSettingsInitState();
        expect(init.defaultDiceCount).to.be.equal(15);
        expect(init.curLang).to.be.equal('GER');
    });
    it('should return the initial state', () => {
        expect(settingsReducer(undefined, {})).to.be.eql(createSettingsInitState());
    });

    it('should handel CHANGE_DEFAULT_DICE_COUNT', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT,
            payload: 20,
        };
        const inState = createSettingsInitState();
        expect(settingsReducer(inState, inAction).defaultDiceCount).to.be.equal(20);
    });

    it('should handel CHANGE_LANG', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_LANG,
            payload: 'EN',
        };
        const inState = createSettingsInitState();
        expect(settingsReducer(inState, inAction).curLang).to.be.equal('EN');
    });
});
