import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

import { appActions } from '../App';

const Toolbar = ({
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

Toolbar.propTypes = {
    openMenu: PropTypes.func,
    title: PropTypes.string,
    icon: PropTypes.any,
};

const mapStateToProps = () => ({});

const actionList = {
    openMenu: appActions.openMenu,
};

export default connect(mapStateToProps, actionList)(Toolbar);
