import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { diceInitState } from './Reducer';
import { ACTION_TYPES, actions } from './Actions';

const middlewares = [thunk];

describe('DiceActions', () => {
    let mockStore;
    beforeEach(() => {
        mockStore = configureMockStore(middlewares);
    });

    it('change dice count', () => {
        const store = mockStore(diceInitState);
        store.dispatch(actions.changeDiceCount());
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
        const res = actions.rollDice(15);
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
        expect(actions.clearRoll()).to
                                   .deep
                                   .equal(expectedAction);
    });

    it('show modal', () => {
        const expectedAction = {
            type: ACTION_TYPES.SHOW_POPOVER,
        };

        expect(actions.showPopover()).to
                                     .deep
                                     .equal(expectedAction);
    });

    it('closeMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.HIDE_POPOVER,
        };
        expect(actions.hidePopover()).to
                                     .deep
                                     .equal(expectedAction);
    });
});
