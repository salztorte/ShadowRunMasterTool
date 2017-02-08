// @flow
import React, { PropTypes } from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

import { connect } from '../tools';
import { actions } from '../App/Actions';

const Toolbar: Function = ({
    openMenu,
    title,
    icon,
    }) =>
    (
        <Header
            size='small'
            justify='between'
            colorIndex='neutral-1'
            full='horizontal'
            fixed
            separator='bottom'
        >
            <Box
                onClick={openMenu}
            >
                {icon}
            </Box>
            <Title>
                {title}
            </Title>
            <Box />
        </Header>
    );

Toolbar.displayName = 'Toolbar';

Toolbar.propTypes = {
    openMenu: PropTypes.func,
    title: PropTypes.string,
    icon: PropTypes.element,
};

const mapStateToProps = () => ({});

const actionList = {
    openMenu: actions.openMenu,
};

export default connect(mapStateToProps, actionList)(Toolbar);
