// @flow
import React, { PropTypes } from 'react';

import NumberInput from 'grommet/components/NumberInput';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';

import BoxItem from '../Componets/BoxItem.jsx';

const DefaultDicePool: Function = ({
    translate,
    onChange,
    defaultDice,
    }) =>
    (
        <BoxItem
            label={translate.HEADLINE}
        >
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
