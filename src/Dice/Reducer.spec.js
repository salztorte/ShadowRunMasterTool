import chai, { expect }from 'chai';
import chaiImmutable from 'chai-immutable';

import { initState, reducer } from './Reducer';
import { actions } from './Actions';

chai.use(chaiImmutable);

describe('Dice Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to
                                      .deep
                                      .equal(initState);
    });

    it('should handel CHANGE_DICE_COUNT', () => {
        expect(reducer(initState, actions.changeDiceCount(50))).to
                                                               .have
                                                               .deep
                                                               .property('diceCount', 50);
    });

    it('should handel ROLL_DICE', () => {
        expect(reducer(initState, actions.rollDice()).rollResult).to
                                                                 .have
                                                                 .lengthOf(15)

        const otherDiceCount = reducer(initState, actions.changeDiceCount(50));
        expect(reducer(otherDiceCount, actions.rollDice()).rollResult).to
                                                                      .have
                                                                      .lengthOf(50)
    });

    it('should handel ROLL_DICE', () => {
        const roled = reducer(initState, actions.rollDice())
        expect(reducer(roled, actions.clearRoll()).rollResult).to
                                                              .have
                                                              .lengthOf(0);
    });

    it('should handel TOGGLE_POPOVER', () => {
        const first = reducer(initState, actions.showPopover());
        const second = reducer(first, actions.hidePopover());

        expect(first).to
                     .have
                     .deep
                     .property('isPopoverOpen', true);

        expect(second).to
                      .have
                      .deep
                      .property('isPopoverOpen', false);
    });
});