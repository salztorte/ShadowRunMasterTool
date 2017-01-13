// @flow
import React, { PropTypes } from 'react';

import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Layer from 'grommet/components/Layer';
import NumberInput from 'grommet/components/NumberInput';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

//import { Entry as EntryType } from './InitState';
import { Entry as EntryType } from './Reducer';

const SetInit:Function = ({
    onSubmit,
    onClose,
    onChange,
    isError,
    translate,
    aktEntry,
    }) =>
    (
        <Layer
            algin='top'
            onClose={onClose}
        >
            <Heading>{aktEntry.name}</Heading>
            <Form
                style={{ width: '100%' }}
                pad={{ vertical: 'small' }}
            >
                <FormField
                    style={{ width: '100%' }}
                    label={translate.INI_VALUE}
                    error={isError ? translate.ERROR.NAME : null}
                >
                    <NumberInput
                        onChange={event => onChange(event.target.value)}
                        style={{ width: '100%' }}
                    />
                </FormField>
                <Box
                    pad={{ vertical: 'small' }}
                    primary
                    fill
                >
                    <Button
                        type='button'
                        onClick={onSubmit}
                        label={translate.SAVE}
                    />
                </Box>
            </Form>
        </Layer>
    );

SetInit.propTypes = {
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    translate: PropTypes.object,
    aktEntry: PropTypes.instanceOf(EntryType),
    isError: PropTypes.bool,
};

SetInit.defaultProps = {
    onClose: () => ({}),
    onSubmit: () => ({}),
    onChange: () => ({}),
};

export default SetInit;

