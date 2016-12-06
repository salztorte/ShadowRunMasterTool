import React, { PropTypes } from 'react';

import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Layer from 'grommet/components/Layer';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import Button from 'grommet/components/Button';

const NewEntry = ({
    onSubmit,
    onClose,
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
                onSubmit={(event) => {
                    console.log(event.target.value);
                }}
            >
                <FormField
                    style={{ width: '100%' }}
                    label={translate.NAME}
                >
                    <TextInput
                        defaultValue={''}
                        style={{ width: '100%' }}
                    />
                </FormField>
                <FormField
                    style={{ width: '100%' }}
                    label={translate.INI_VALUE}
                >
                    <NumberInput
                        min={0}
                        style={{ width: '100%' }}
                    />
                </FormField>
                <Button
                    type='submit'
                    onClick={() => {'blub'}}
                    label={translate.SAVE}
                />
            </Form>
        </Layer>
    );

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
