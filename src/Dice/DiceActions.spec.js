/* eslint import/no-extraneous-dependencies: 0 */
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import Menu from 'grommet/components/icons/base/Menu';
import thunk from 'redux-thunk';

import { diceInitState } from './DiceReducer';
import { ACTION_TYPES, diceActions } from './DiceActions';

const middlewares = [thunk];

describe('DiceActions', () => {
    let mockStore;
    beforeEach(() => {
        mockStore = configureMockStore(middlewares);
    });

    it('change dice count', () => {
        const store = mockStore(diceInitState);
        store.dispatch(diceActions.changeDiceCount());
        const resAction = store.getActions();

        expect(resAction).to
                         .have
                         .lengthOf(2);
        expect(resAction[0].type).to
                                 .be
                                 .equal(ACTION_TYPES.CLEAR_ROLLS);
        expect(resAction[1].type).to
                                 .be
                                 .equal(ACTION_TYPES.CHANGE_DICE_COUNT);
    });

    it('roll dice', () => {
        const res = diceActions.rollDice(15);
        expect(res.type).to
                        .be
                        .equal(ACTION_TYPES.ROLL_DICE);
        expect(res.payload.length).to
                                  .be
                                  .equal(15);
    });

    it('clear Rollresult', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLEAR_ROLLS,
        };
        expect(diceActions.clearRoll()).to
                                       .deep
                                       .equal(expectedAction);
    });

    it('show modal', () => {
        const expectedAction = {
            type: ACTION_TYPES.SHOW_MODAL,
        };

        expect(diceActions.showModal()).to
                                       .deep
                                       .equal(expectedAction);
    });

    it('closeMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.HIDE_MODAL,
        };
        expect(diceActions.hideModal()).to
                                       .deep
                                       .equal(expectedAction);
    });
});
