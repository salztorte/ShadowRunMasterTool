import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import NumberInput from 'grommet/components/NumberInput';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';



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
        <Box
            separator={'bottom'}
            pad={{
                horizontal: 'small',
                vertical: 'small',
            }}
        >
            <Heading
                tag="h4"
                strong
            >
                {translate.DICE_POOL}
            </Heading>
            <Form
                style={{ width: '100%' }}
                pad={{ vertical: 'small' }}
            >
                <FormField
                    style={{ width: '100%' }}
                >
                    <NumberInput
                        value={`${diceCount}`}
                        onChange={(event) => { changeDiceCount(parseInt(event.target.value)); }}
                        style={{ width: '100%' }}
                    />
                </FormField>
            </Form>
            <Button
                type="button"
                onClick={() => {
                    rollDice(diceCount)
                }}
                label={translate.ROLL_BUTTON}
                primary
                fill
            />

        </Box>
    );

DiceInput.propTypes = {
    diceCount: PropTypes.number.isRequired,
    changeDiceCount: PropTypes.func.isRequired,
    rollDice: PropTypes.func.isRequired,
    translate: PropTypes.object,
};


export default DiceInput;
