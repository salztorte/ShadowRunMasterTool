import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';

import { diceActions } from './DiceActions';
import DiceInput from './DiceInput.jsx';
import DiceResult from './DiceResult.jsx';

const Dice = ({
    diceCount,
    changeDiceCount,
    rollDice,
    rollResult,
    translate,
    }) => {
    return (
        <Box>
            <DiceInput
                translate={translate}
                changeDiceCount={changeDiceCount}
                diceCount={diceCount}
                rollDice={rollDice}
            />
            <DiceResult
                rollResult={rollResult}
            />
        </Box>
    );
};


//<Dialog
//    isOpen={isOpen}
//    isCancelable={true}
//    onCancel={hideModal}
//    animation="none"
//>
//    <div style={{textAlign: 'center', margin: '20px'}}>
//        <p style={{opacity: 0.5}}>This is a dialog!</p>
//        <p>
//            <Button onClick={hideModal}>Close</Button>
//        </p>
//    </div>
//</Dialog>

Dice.propTypes = {
    diceCount: PropTypes.number.isRequired,
    changeDiceCount: PropTypes.func.isRequired,
    rollDice: PropTypes.func.isRequired,
    rollResult: PropTypes.arrayOf(PropTypes.number),
    translate: PropTypes.object,
};


const mapStateToProps = state => ({
    diceCount: state.dice.diceCount,
    rollResult: state.dice.rollResult,
    translate: state.translation.translate.DICE_CUP,
//    isOpen: state.dice.isDialogOpen,
});

const actionList = {
    changeDiceCount: diceActions.changeDiceCount,
    rollDice: diceActions.rollDice,
};

export default connect(mapStateToProps, actionList)(Dice);

