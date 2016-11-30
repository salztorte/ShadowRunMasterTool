import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';

import { diceActions } from './DiceActions';
import DiceInput from './DiceInput.jsx';
import DiceResult from './DiceResult.jsx';
import DiceResultPopover from './DiceResultPopover.jsx';

import Toolbar from '../Componets/Toolbar.jsx';


const Dice = ({
    changeDiceCount,
    diceCount,
    hidePopover,
    isPopoverOpen,
    rollDice,
    rollResult,
    showPopover,
    translate,
    }) =>
    (
        <Box>
            <Toolbar
                title={translate.TITLE}
                showMenuIcon
            />
            <DiceInput
                translate={translate}
                changeDiceCount={changeDiceCount}
                diceCount={diceCount}
                rollDice={(count) => {
                    rollDice(count);
                    showPopover();
                }}
            />
            <DiceResult
                rollResult={rollResult}
            />
            {isPopoverOpen ? <DiceResultPopover
                onClose={hidePopover}
                rollResult={rollResult}
                translate={translate}
            /> : null}
        </Box>
    );

Dice.propTypes = {
    changeDiceCount: PropTypes.func.isRequired,
    diceCount: PropTypes.number.isRequired,
    hidePopover: PropTypes.func.isRequired,
    isPopoverOpen: PropTypes.bool,
    rollDice: PropTypes.func.isRequired,
    rollResult: PropTypes.arrayOf(PropTypes.number),
    showPopover: PropTypes.func.isRequired,
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    diceCount: state.dice.diceCount,
    isPopoverOpen: state.dice.isPopoverOpen,
    rollResult: state.dice.rollResult,
    translate: state.translation.translate.DICE_CUP,
});

const actionList = {
    changeDiceCount: diceActions.changeDiceCount,
    hidePopover: diceActions.hidePopover,
    rollDice: diceActions.rollDice,
    showPopover: diceActions.showPopover,
};

export default connect(mapStateToProps, actionList)(Dice);

