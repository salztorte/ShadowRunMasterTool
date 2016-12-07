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
    translate,
    }) => {
    const EntryValues = {
        name: '',
        iniValue: 0,
    };

    return (
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
                        defaultValue={''}
                        onDOMChange={event => {
                            EntryValues.name = event.target.value;
                        }}
                        style={{ width: '100%' }}
                    />
                </FormField>
                <FormField
                    style={{ width: '100%' }}
                    label={translate.INI_VALUE}
                >
                    <NumberInput
                        min={0}
                        onChange={event => {
                            EntryValues.iniValue = event.target.value;
                        }}
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
                            onSubmit(EntryValues);
                            onClose();
                        }}
                        label={translate.SAVE}
                    />
                </Box>
            </Form>
        </Layer>
    );
};
//<NumberInput
//    value={`${diceCount}`}
//    onChange={(event) => { changeDiceCount(parseInt(event.target.value)); }}
//    style={{ width: '100%' }}
///>

//<Paragraph> {translate.TEXT_POPOVER.replace('COUNT', result.succsess)}</Paragraph>

NewEntry.propTypes = {
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    translate: PropTypes.object,
};

export default NewEntry;

