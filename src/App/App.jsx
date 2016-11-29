import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';
import Page from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Menu from 'grommet/components/icons/base/Menu';
import backgroundSkyline from 'file-loader!../../SR5_Fankit/Hintergruende/Skyline_Seattle_weiss_1920x1080px.jpg';

import { routerActions } from 'react-router-redux';

import Toolbar from './Toolbar.jsx';
import SideMenu from './SideMenu.jsx';
import { resourcesActions } from '../Resources';

import { appActions } from './AppActions';

export const createMenu = trans => [{
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

export const App = ({
    children,
    closeMenu,
    openMenu,
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
            {isOpen ? (
                <SideMenu
                    title={translate.MENU}
                    goToRoute={routerPush}
                    menuItems={menu}
                    closeMenu={closeMenu}
                />

            ) : null}
            <Article
                full
                flex={'shrink'}
                texture={backgroundSkyline}
                style={{
                    backgroundAttachment: 'fixed',
                }}
            >
                <div>
                    <Toolbar
                        title={getTitleFromPath(menu, path)}
                        toggleMenu={openMenu}
                        icon={<Menu size="small" />}
                    />
                    <Box>
                        {children}
                    </Box>
                </div>
            </Article
>
        </Page>
    );
};
delapouite@gmail.com
//background-image: url(http://localhost:63342/ShadowRunMasterTool/build/8e9d6e7ad65b37816385250ed799e836.jpg);

//style={{
//    backgroundImage: backgroundSkyline,
//}}

App.propTypes = {
    children: PropTypes.element,
    closeMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openMenu: PropTypes.func.isRequired,
    path: PropTypes.string,
    routerPush: PropTypes.func,
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

export default connect(mapStateToProps, actionList)(App);
