import React, { PropTypes } from 'react';

import Article from 'grommet/components/Article';
import Page from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Menu from 'grommet/components/icons/base/Menu';

import { routerActions } from 'react-router-redux';

import Toolbar from './Toolbar.jsx';
import SideMenu from './SideMenu.jsx';
import { resourcesActions } from '../Resources';

import { appActions } from './AppActions';
import { connector } from '../tools';

const createMenu = trans => [{
    title: trans.SEARCH,
    path: 'search',
}, {
    title: trans.DICE_CUP,
    path: 'dicecup',
}, {
    title: trans.SETTINGS,
    path: 'settings',
}, {
    title: trans.IMPRESSUM,
    path: 'impressum',
}];

const getTitleFromPath = (menu, path) => menu.reduce((res, cur) => (
    path === `/${cur.path}` ? cur.title : res
), '');

//                        closeMenu();
//                        searchData('');
const App = ({
    bookIndex,
    children,
    closeMenu,
    openMenu,
    generateData,
    isOpen,
    translate,
    path,
    routerPush,
    }) => {
    const menu = createMenu(translate);
    return (
        <Page
            centered={false}
        >
            <SideMenu
                title={translate.MENU}
                goToRoute={routerPush}
                menuItems={menu}
                closeMenu={closeMenu}
                isOpen={isOpen}
            />
            <Article>
                <Toolbar
                    title={getTitleFromPath(menu, path)}
                    toggleMenu={openMenu}
                    icon={<Menu size="small" />}
                />
                <Box>
                    {children}
                </Box>
            </Article>
        </Page>
    );
};

App.propTypes = {
    bookIndex: PropTypes.object,
    children: PropTypes.element,
    closeMenu: PropTypes.func.isRequired,
    generateData: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openMenu: PropTypes.func.isRequired,
    path: PropTypes.string,
    routerPush: PropTypes.func,
//    searchData: PropTypes.func.isRequired,
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    bookIndex: state.resources.bookIndex,
    isOpen: state.app.isOpen,
    path: state.routing.locationBeforeTransitions.get('pathname'),
    translate: state.translation.translate.HEADLINES,
});
const actionList = {
    closeMenu: appActions.closeMenu,
    generateData: resourcesActions.generateData,
    openMenu: appActions.openMenu,
    routerPush: routerActions.push,
    searchData: resourcesActions.searchData,
};

export default connector(mapStateToProps, actionList)(App);
