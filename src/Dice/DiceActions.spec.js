/* eslint import/no-extraneous-dependencies: 0 */
import configureMockStore from 'redux-mock-store';
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

        expect(resAction.length).toBe(2);
        expect(resAction[0].type).toBe(ACTION_TYPES.CLEAR_ROLLS);
        expect(resAction[1].type).toBe(ACTION_TYPES.CHANGE_DICE_COUNT);
    });

    it('roll dice', () => {
        const res = diceActions.rollDice(15);
        expect(res.type).toBe(ACTION_TYPES.ROLL_DICE);
        expect(res.payload.length).toBe(15);
    });

    it('clear Rollresult', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLEAR_ROLLS,
        };
        expect(diceActions.clearRoll()).toEqual(expectedAction);
    });

    it('show modal', () => {
        const expectedAction = {
            type: ACTION_TYPES.SHOW_MODAL,
        };

        expect(diceActions.showModal()).toEqual(expectedAction);
    });

    it('closeMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.HIDE_MODAL,
        };
        expect(diceActions.hideModal()).toEqual(expectedAction);
    });
});
