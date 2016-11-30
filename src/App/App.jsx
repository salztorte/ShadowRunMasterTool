import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';
import Page from 'grommet/components/App';
import Box from 'grommet/components/Box';

import { routerActions } from 'react-router-redux';

import backgroundSkyline from '../Resources/Background/Skyline.jpg';


import Toolbar from '../Componets/Toolbar.jsx';
import SideMenu from './SideMenu.jsx';
import { searchIndexActions } from '../SearchIndex';

import { appActions } from './AppActions';

export const App = ({
    children,
    closeMenu,
    isOpen,
    translate,
    routerPush,
    }) =>
    (
        <Page
            centered={false}
        >
            {isOpen ? (
                <SideMenu
                    translate={translate}
                    goToRoute={routerPush}
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
                {children}
            </Article>
        </Page>
    );

//<Toolbar
//    title={getTitleFromPath(menu, path)}
//    showMenuIcon
///>
//<Box>
//{children}
//</Box>

//background-image: url(http://localhost:63342/ShadowRunMasterTool/build/8e9d6e7ad65b37816385250ed799e836.jpg);

//style={{
//    backgroundImage: backgroundSkyline,
//}}

App.propTypes = {
    children: PropTypes.element,
    closeMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    routerPush: PropTypes.func,
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    bookIndex: state.resources.bookIndex,
    isOpen: state.app.isOpen,
    translate: state.translation.translate.MENU,
});
const actionList = {
    closeMenu: appActions.closeMenu,
    generateData: searchIndexActions.generateData,
    openMenu: appActions.openMenu,
    routerPush: routerActions.push,
    searchData: searchIndexActions.searchData,
};

export default connect(mapStateToProps, actionList)(App);
