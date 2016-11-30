import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

import Menu from 'grommet/components/icons/base/Menu';
import { appActions } from '../App';

const Toolbar = ({
    openMenu,
    title,
    showMenuIcon,
    }) =>
    (
        <Header
            size="small"
            justify="between"
            colorIndex="neutral-1"
            full="horizontal"
            fixed
            separator="bottom"
        >

            <Box
                onClick={openMenu}
            >
                {showMenuIcon ? (
                    <Menu size="small" />
                ) : null}
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
    showMenuIcon: PropTypes.bool,
};
Toolbar.defaultProps = {
//    toggleMenu: () => {},
};
const mapStateToProps = () => ({});

const actionList = {
    openMenu: appActions.openMenu,
};

export default connect(mapStateToProps, actionList)(Toolbar);
