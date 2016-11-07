import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import NumberInput from 'grommet/components/NumberInput';
import FormField from 'grommet/components/FormField';

const DefaultDicePool = ({
    translate,
    onChange,
    defaultDice,
    }) =>
    (
        <Box
            separator={'bottom'}
            pad={{
                vertical: 'small',
            }}
        >
            <p style={{ fontWeight: 'bold' }}>{translate.HEADLINE}</p>
            <FormField
                style={{ width: '100%' }}
            >
                <NumberInput
                    id="item2"
                    name="item2"
                    label="Item 2"
                    value={`${defaultDice}`}
                    onChange={onChange}
                    style={{ width: '100%' }}
                />
            </FormField>

        </Box>
    );

DefaultDicePool.propTypes = {
    translate: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultDice: PropTypes.number.isRequired,
};

export default DefaultDicePool;
