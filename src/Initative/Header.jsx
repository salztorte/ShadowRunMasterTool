// @flow
import React, { PropTypes } from 'react';

import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import Add from 'grommet/components/icons/base/Add';

const headerProps = {
    size: 'small',
    justify: 'between',
    pad: 'small',
    style: {
        backgroundColor: 'transparent',
    },
    fixed: true,
};

const InitativeHeader: Function = ({
    add,
    next,
    newRound,
    translate,
    }) =>
    (
        <Box>
            <Header {...headerProps}>
                <Button
                    type='button'
                    onClick={newRound}
                    label={translate.NEW_ROUND_BUTTON}
                    primary
                    fill
                />
            </Header>
            <Header {...headerProps}>
                <Button
                    type='button'
                    onClick={next}
                    label={translate.NEXT_BUTTON}
                    primary
                    fill
                />
            </Header>
            <Header
                {...headerProps}
                separator='bottom'
            >
                <Title>{ translate.ORDER}</Title>
                <Box />
                <Box
                    onClick={add}
                >
                    <Add />
                </Box>
            </Header>
        </Box>
    );

//noinspection Eslint
InitativeHeader.propTypes = {
    add: PropTypes.func,
    next: PropTypes.func,
    newRound: PropTypes.func,
    translate: PropTypes.object,
};

export default InitativeHeader;
