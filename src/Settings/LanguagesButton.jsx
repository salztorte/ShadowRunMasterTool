import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

const LanguagesButton = ({
    changeLang,
    name,
    translate,
    }) =>
    (
        <Box
            pad={{ vertical: 'small' }}
        >
            <Button
                type="button"
                onClick={() => changeLang(name)}
                label={translate[name]}
                primary
            />
        </Box>);

LanguagesButton.propTypes = {
    changeLang: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    translate: PropTypes.object.isRequired,
};


export default LanguagesButton;
