import React, { PropTypes } from 'react';

import Heading from 'grommet/components/Heading';
import NumberInput from 'grommet/components/NumberInput';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';

import BoxItem from '../Componets/BoxItem.jsx';

const DefaultDicePool = ({
    translate,
    onChange,
    defaultDice,
    }) =>
    (
        <BoxItem>
            <Heading
                tag='h4'
                strong
            >
                {translate.HEADLINE}
            </Heading>
            <Form
                style={{ width: '100%' }}
                pad={{ vertical: 'small' }}
            >
                <FormField
                    style={{ width: '100%' }}
                >
                    <NumberInput
                        value={`${defaultDice}`}
                        onChange={onChange}
                        style={{ width: '100%' }}
                    />
                </FormField>
            </Form>
        </BoxItem>
    );

DefaultDicePool.propTypes = {
    translate: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultDice: PropTypes.number.isRequired,
};

export default DefaultDicePool;
