import { settingsReducer, createSettingsInitState } from './SettingsReducer';
import { ACTION_TYPES } from './SettingsActions';

describe('DiceReducer', () => {
    it('should create the rigth initState', () => {
        const init = createSettingsInitState();
        expect(init.defaultDiceCount).toBe(15);
        expect(init.curLang).toBe('GER');
    });
    it('should return the initial state', () => {
        expect(settingsReducer(undefined, {})).toEqual(createSettingsInitState());
    });

    it('should handel CHANGE_DEFAULT_DICE_COUNT', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT,
            payload: 20,
        };
        const inState = createSettingsInitState();
        expect(settingsReducer(inState, inAction).defaultDiceCount).toBe(20);
    });

    it('should handel CHANGE_LANG', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_LANG,
            payload: 'EN',
        };
        const inState = createSettingsInitState();
        expect(settingsReducer(inState, inAction).curLang).toBe('EN');
    });
});
