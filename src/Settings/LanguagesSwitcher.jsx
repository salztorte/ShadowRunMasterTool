import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import LanguagesButton from './LanguagesButton.jsx';

//<Paragraph>
//    {translate.HEADLINE}
//</Paragraph>


const LanguagesSwitcher = ({
    translate,
    changeLang,
    langArray,
    }) =>
    (
        <Box>
            <Heading
                tag="h4"
                strong
            >
                {translate.HEADLINE}
            </Heading>
            <LanguagesButton
                languages={langArray}
                translate={translate}
                changeLang={changeLang}
            />
        </Box>
    );


LanguagesSwitcher.propTypes = {
    translate: PropTypes.object.isRequired,
    changeLang: PropTypes.func.isRequired,
    langArray: PropTypes.arrayOf(PropTypes.string),
};

export default LanguagesSwitcher;
