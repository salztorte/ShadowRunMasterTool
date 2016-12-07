import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';

import Toolbar from '../Componets/Toolbar.jsx';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';

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
                <Toolbar title={translate.TITLE}/>
                <Menu primary>
                    {getMenuItems(translate).map(cur =>
                        <Anchor
                            label={cur.title}
                            key={cur.title}
                            onClick={() => {
                                 goToRoute(cur.path);
                                closeMenu();
                            }}

                        />
                    )}
                </Menu>

            </Box>
        </Layer>
    );


SideMenu.propTypes = {
    closeMenu: PropTypes.func,
    goToRoute: PropTypes.func,
    translate: PropTypes.object,
};

export default SideMenu;
