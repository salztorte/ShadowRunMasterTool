import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import LanguagesButton from './LanguagesButton.jsx';

const buttonStyle = {
    marginRight: '15px',
};

const LanguagesSwitcher = ({
    translate,
    changeLang,
    langArray,
    }) =>
    (
        <Box
            separator={'bottom'}
        >
            <p style={{ fontWeight: 'bold' }}>{translate.HEADLINE}</p>
            {langArray.reduce((res, cur) => {
                res.push(
                    <LanguagesButton
                        key={cur}
                        name={cur}
                        translate={translate}
                        changeLang={changeLang}
                    />
                );
                return res;
            }, [])}
        </Box>
    );


LanguagesSwitcher.propTypes = {
    translate: PropTypes.object.isRequired,
    changeLang: PropTypes.func.isRequired,
    langArray: PropTypes.arrayOf(PropTypes.string),
};

export default LanguagesSwitcher;
