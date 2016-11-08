import React, { PropTypes } from 'react';
import { Input, Button, ListItem } from 'react-onsenui';


const style = {
    headLine: {
        fontWeight: 'bold',
    },
    diceInput: {
        width: '100%',
        marginBottom: '15px',
    },
};

const DiceInput = ({
    translate,
    changeDiceCount,
    diceCount,
    rollDice,
    }) =>
    (
        <ListItem style={{ width: '100%' }}>
            <div className="myListItem">
                <p style={style.headLine}>{translate.DICE_POOL}</p>
                <Input
                    type="number"
                    modifier="underbar"
                    value={`${diceCount}`}
                    onChange={(event) => { changeDiceCount(parseInt(event.target.value)); }}
                    style={style.diceInput}
                />

                <Button
                    style={{
                        width: '100%',
                        textAlign: 'center',
                    }}
                    onClick={() => rollDice(diceCount)}
                >
                    {translate.ROLL_BUTTON}
                </Button>
            </div>
        </ListItem>
    );

DiceInput.propTypes = {
    diceCount: PropTypes.number.isRequired,
    changeDiceCount: PropTypes.func.isRequired,
    rollDice: PropTypes.func.isRequired,
    translate: PropTypes.object,
};


export default DiceInput;
