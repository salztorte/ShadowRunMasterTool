import React, { PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';

import Toolbar from './Toolbar.jsx';
import SideMenuItems from './SideMenuItems.jsx';

const SideMenu = ({
    closeMenu,
    goToRoute,
    menuItems,
    title,
    }) =>
    (
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
                <SideMenuItems
                    menuItems={menuItems}
                    onClick={(path) => {
                        goToRoute(path);
                        closeMenu();
                    }}
                />
            </Box>
        </Layer>
    );

SideMenu.propTypes = {
    closeMenu: PropTypes.func,
    goToRoute: PropTypes.func,
    menuItems: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};

export default SideMenu;
