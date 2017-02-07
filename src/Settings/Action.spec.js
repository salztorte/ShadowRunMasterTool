import { expect }from 'chai';
import { actions, ACTION_TYPES } from './Actions';


describe('App Actions', () => {
    it('ACTION_TYPES', () => {
        expect(ACTION_TYPES).to.be.eql({
            CHANGE_DEFAULT_DICE_COUNT: 'CHANGE_DEFAULT_DICE_COUNT',
            CHANGE_LANG: 'CHANGE_LANG',
        })
    });

    it('changeLang', () => {
        const expectedAction = {
            type: ACTION_TYPES.CHANGE_LANG,
            lang: 'DE',
        };
        expect(actions.changeLang('DE')).to.be.eql(expectedAction);
    });

    it('changeDefaultDiceCount', () => {
        const expectedAction = {
            type: ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT,
            count: 50,
        };
        expect(actions.changeDefaultDiceCount(50)).to.be.eql(expectedAction);
    });
});