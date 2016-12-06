import React, { PropTypes } from 'react';

import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Layer from 'grommet/components/Layer';
import TextInput from 'grommet/components/TextInput';

let bla = "hallo"

const NewEntry = ({
    onClose,
    translate,
    }) =>
    (
        <Layer
            algin='top'
            closer='true'
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
                        value={bla}
                        onDOMChange={event => {
                            bla = event.target.value;
                        }}
                        style={{ width: '100%' }}
                    />
                </FormField>
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
    translate: PropTypes.object,
};

export default NewEntry;
