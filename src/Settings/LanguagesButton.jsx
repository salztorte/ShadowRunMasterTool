import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

const LanguagesButton = ({
    changeLang,
    languages,
    translate,
    }) =>
    (
        <Box
            pad={{
                vertical: 'small',
                between: 'small',
            }}
            direction='row'
        >
            {languages.reduce((res, name) => {
                res.push(
                    <Button
                        key={name}
                        type='button'
                        onClick={() => changeLang(name)}
                        label={translate[name]}
                        primary
                    />
                );
                return res;
            }, [])}
        </Box>);

LanguagesButton.propTypes = {
    changeLang: PropTypes.func.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    translate: PropTypes.object.isRequired,
};


export default LanguagesButton;


//{langArray.reduce((res, cur) => {
//    res.push(
//        <LanguagesButton
//            key={cur}
//            name={cur}
//            translate={translate}
//            changeLang={changeLang}
//        />
//    );
//    return res;
//}, [])}