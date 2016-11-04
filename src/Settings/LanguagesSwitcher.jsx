import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
//import { Button, ListItem } from 'react-onsenui';

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
            <Box
                direction={'col'}
            >
                {langArray.reduce((res, cur) => {
                    res.push(<Button
                        type="button"
                        key={cur}
                        onClick={() => changeLang(cur)}
                        label={translate[cur]}
                        primary
                    />);
                    return res;
                }, [])}
            </Box>
        </Box>
    );


LanguagesSwitcher.propTypes = {
    translate: PropTypes.object.isRequired,
    changeLang: PropTypes.func.isRequired,
    langArray: PropTypes.arrayOf(PropTypes.string),
};

export default LanguagesSwitcher;
