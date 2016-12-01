import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions } from './Actions';
import Input from './Input.jsx';
import Result from './Result.jsx';
import ResultPopover from './ResultPopover.jsx';

import Content from '../Componets/Content.jsx';


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
        <Content title={translate.TITLE}>
            <Input
                translate={translate}
                changeDiceCount={changeDiceCount}
                diceCount={diceCount}
                rollDice={(count) => {
                    rollDice(count);
                    showPopover();
                }}
            />
            <Result
                rollResult={rollResult}
            />
            {isPopoverOpen ? <ResultPopover
                onClose={hidePopover}
                rollResult={rollResult}
                translate={translate}
            /> : null}
        </Content>
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
    changeDiceCount: actions.changeDiceCount,
    hidePopover: actions.hidePopover,
    rollDice: actions.rollDice,
    showPopover: actions.showPopover,
};

export default connect(mapStateToProps, actionList)(Dice);

