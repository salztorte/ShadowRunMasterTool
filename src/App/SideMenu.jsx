import React, { PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';


import Toolbar from './Toolbar.jsx';

const SideMenu = ({
    closeMenu,
    goToRoute,
    isOpen,
    menuItems,
    title,
    }) => (
    isOpen ? (
        <Layer
            align="left"
            closer
            flush
            onClose={closeMenu}
        >
            <Box
                colorIndex="neutral-1"
                style={{ width: '100%' }}
                full="vertical"
            >
                <Toolbar title={title} />
                <Menu primary>
                    {menuItems.reduce((res, { title, path }) => {
                        res.push(
                            <Anchor
                                label={title}
                                key={title}
                                onClick={() => {
                                    goToRoute(path);
                                    closeMenu();
                                }}
                            />
                        );
                        return res;
                    }, [])}
                </Menu>
            </Box>
        </Layer>
    )
        : null
);


SideMenu.propTypes = {
    closeMenu: PropTypes.func.isRequired,
    goToRoute: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
};

export default SideMenu;
