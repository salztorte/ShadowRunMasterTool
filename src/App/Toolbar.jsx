import React, { PropTypes } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

const Toolbar = ({
    title,
    toggleMenu,
    icon,
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
                onClick={toggleMenu}
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
    title: PropTypes.string,
    toggleMenu: PropTypes.func,
    icon: PropTypes.element,
};

Toolbar.defaultProps = {
    toggleMenu: () => {},
};

export default Toolbar;
