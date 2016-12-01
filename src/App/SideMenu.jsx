import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';

import Toolbar from '../Componets/Toolbar.jsx';
import SideMenuItems from './SideMenuItems.jsx';


const getMenuItems = trans => [{
    title: trans.SEARCH,
    path: 'search',
}, {
    title: trans.DICE_CUP,
    path: 'dicecup',
}, {
    title: trans.INITATIVE,
    path: 'Initative',
}, {
    title: trans.SETTINGS,
    path: 'settings',
}, {
    title: trans.IMPRESSUM,
    path: 'impressum',
}];

const SideMenu = ({
    closeMenu,
    goToRoute,
    translate,
    }) =>
    (
        <Layer
            align='left'
            closer
            flush
            onClose={closeMenu}
        >
            <Box
                colorIndex='neutral-1'
                style={{ width: '100%' }}
                full='vertical'
            >
                <Toolbar title={translate.TITLE} />
                <SideMenuItems
                    menuItems={getMenuItems(translate)}
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
    translate: PropTypes.object,
};

export default SideMenu;
