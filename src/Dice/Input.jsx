// @flow
import React, { PropTypes } from 'react';

import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import NumberInput from 'grommet/components/NumberInput';
import Paragraph from 'grommet/components/Paragraph';

import BoxItem from '../Componets/BoxItem.jsx';

const Input: Function = ({
    translate,
    changeDiceCount,
    diceCount,
    rollDice,
    }) =>
    (
        <BoxItem
            label={translate.DICE_POOL}
        >
            <Form
                style={{ width: '100%' }}
                pad={{ vertical: 'small' }}
            >
                <FormField
                    style={{ width: '100%' }}
                >
                    <NumberInput
                        value={`${diceCount}`}
                        onChange={event => changeDiceCount(parseInt(event.target.value, 10))}
                        style={{ width: '100%' }}
                    />
                </FormField>
            </Form>
            <Button
                type='button'
                onClick={() => {
                    rollDice();
                }}
                label={translate.ROLL_BUTTON}
                primary
                fill
            />
            <Paragraph
                style={{
                    color: 'green',
                    fontWeight: 'bold',
                }}
            >{`Du kannst dir ${Math.floor(diceCount / 4)} Erfolge kaufen.`}</Paragraph>

        </BoxItem>
    );

Input.propTypes = {
    diceCount: PropTypes.number.isRequired,
    changeDiceCount: PropTypes.func.isRequired,
    rollDice: PropTypes.func.isRequired,
    translate: PropTypes.object,
};


export default Input;
