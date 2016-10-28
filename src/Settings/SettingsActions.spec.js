import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { createSettingsInitState } from './SettingsReducer';
import { ACTION_TYPES, actions } from './SettingsActions';

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

        expect(actions.changeDefaultDiceCount(20)).toEqual(expectedAction);
    });

    it('change default dice count', () => {
        const store = mockStore(createSettingsInitState());
        store.dispatch(actions.changeLang('EN'));
        const resAction = store.getActions();

        expect(resAction.length).toBe(1);
        expect(resAction[0].type).toBe(ACTION_TYPES.CHANGE_LANG);
    });
});

