// @flow
import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import BoxItem from '../Componets/BoxItem.jsx';

const LanguagesSwitcher: Function = ({
    translate,
    changeLang,
    langArray,
    }) =>
    (
        <BoxItem
            label={translate.HEADLINE}
        >
            <Box
                pad={{
                    vertical: 'small',
                    between: 'small',
                }}
                direction='row'
            >
                {langArray.reduce((res, name) => {
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
            </Box>
        </BoxItem>
    );


LanguagesSwitcher.propTypes = {
    translate: PropTypes.objectOf(PropTypes.string),
    changeLang: PropTypes.func,
    langArray: PropTypes.arrayOf(PropTypes.string),
};

export default LanguagesSwitcher;
