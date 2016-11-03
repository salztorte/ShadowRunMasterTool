/* eslint import/no-extraneous-dependencies: 0 */
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { createSettingsInitState } from './SettingsReducer';
import { ACTION_TYPES, settingsActions } from './SettingsActions';

const middlewares = [thunk];

describe('DiceActions', () => {
    let mockStore;
    beforeEach(() => {
        mockStore = configureMockStore(middlewares);
    });

    it('change default dice count', () => {
        const expectedAction = {
            type: ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT,
            payload: 20,
        };
        expect(settingsActions.changeDefaultDiceCount(20)).to
                                                          .deep
                                                          .equal(expectedAction);
    });

    it('change default dice count', () => {
        const store = mockStore(createSettingsInitState());
        store.dispatch(settingsActions.changeLang('EN'));
        const resAction = store.getActions();

        expect(resAction).to
                         .have
                         .lengthOf(2);
        expect(resAction[1].type).to.be.equal(ACTION_TYPES.CHANGE_LANG);
    });
});
