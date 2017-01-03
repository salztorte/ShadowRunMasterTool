// @flow
import React, { PropTypes } from 'react';

import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Layer from 'grommet/components/Layer';
import TextInput from 'grommet/components/TextInput';
//import NumberInput from 'grommet/components/NumberInput';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import { Entry as EntryType } from './Reducer';

const NewEntry: Function = ({
    onSubmit,
    onClose,
    onChange,
    isError,
    translate,
    newEntry,
    }) =>
    (
        <Layer
            algin='top'
            onClose={onClose}
        >
            <Heading>{translate.TITLE}</Heading>
            <Form
                style={{ width: '100%' }}
                pad={{ vertical: 'small' }}
            >
                <FormField
                    style={{ width: '100%' }}
                    label={translate.NAME}
                    error={isError ? translate.ERROR.NAME : null}
                >
                    <TextInput
                        onDOMChange={event => onChange('name', event.target.value)}
                        style={{ width: '100%' }}
                        value={newEntry.name}
                    />
                </FormField>
                <Box
                    pad={{ vertical: 'small' }}
                    primary
                    fill
                >
                    <Button
                        type='button'
                        onClick={() => {
                            onSubmit();
                        }}
                        label={translate.SAVE}
                    />
                </Box>
            </Form>
        </Layer>
    );

//<FormField
//    style={{ width: '100%' }}
//    label={translate.INI_VALUE}
//>
//    <NumberInput
//        min={0}
//        value={newEntry.iniValue}
//        onChange={event => onChange('iniValue', event.target.value)}
//        style={{ width: '100%' }}
//    />
//</FormField>


NewEntry.propTypes = {
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    translate: PropTypes.object,
    newEntry: PropTypes.instanceOf(EntryType),
    isError: PropTypes.bool,
};

export default NewEntry;

