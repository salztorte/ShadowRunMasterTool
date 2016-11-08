import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';

const SearchInput = ({
    onChange,
    }) =>
    (
        <Box
            pad={{
                horizontal: 'small',
            }}
        >
            <Form
                style={{ width: '100%' }}
            >
                <FormField
                    style={{ width: '100%' }}
                >
                    <TextInput
                        placeHolder="Suche"
                        onDOMChange={onChange}
                        style={{ width: '100%' }}
                    />
                </FormField>
            </Form>
        </Box>
    );


SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SearchInput;

