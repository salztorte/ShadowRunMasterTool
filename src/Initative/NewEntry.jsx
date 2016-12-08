import React, { PropTypes } from 'react';

import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Layer from 'grommet/components/Layer';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

const NewEntry = ({
    onSubmit,
    onClose,
    onChange,
    translate,
    }) =>
    (
        <Layer
            algin='top'
            onClose={onClose}
        >
            <Form
                style={{ width: '100%' }}
                pad={{ vertical: 'small' }}
            >
                <FormField
                    style={{ width: '100%' }}
                    label={translate.NAME}
                >
                    <TextInput
                        onDOMChange={(event) => onChange('name', event.target.value)}
                        style={{ width: '100%' }}
                    />
                </FormField>
                <FormField
                    style={{ width: '100%' }}
                    label={translate.INI_VALUE}
                >
                    <NumberInput
                        min={0}
                        defaultValue={0}
                        onChange={event => onChange('iniValue', event.target.value)}
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
                        onClick={() => {
                            onSubmit();
                            onClose();
                        }}
                        label={translate.SAVE}
                    />
                </Box>
            </Form>
        </Layer>
    );


NewEntry.propTypes = {
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    translate: PropTypes.object,
};

export default NewEntry;

