import React, { PropTypes } from 'react';

import Page from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

//import { routerActions } from 'react-router-redux';

import Toolbar from './Toolbar.jsx';
//import SideMenu from './SideMenu.jsx';
//import { resourcesActions } from '../Resources';

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

const onInit = (genData, bookIndex) => () => {
    if (bookIndex.size === 0) {
        genData();
    }
};


//const App = ({
//    bookIndex,
//    children,
//    closeMenu,
//    generateData,
//    isOpen,
//    openMenu,
//    path,
//    routerPush,
//    searchData,
//    translate,
//    }) => {
//    const menu = createMenu(translate);
//    const getTitleFromPath = _path => menu.reduce((res, cur) => (
//        _path === `/${cur.path}` ? cur.title : res
//    ), '');
const App = () => {
    return (
        <Page
            centered={false}
        >
            <Toolbar
                title="Test1234"
                clickIcon={() => {}}
            />
        </Page>
    );
};

//
//<Splitter>
//    <SideMenu
//        closeMenu={closeMenu}
//        goToRoute={(_path) => {
//                    closeMenu();
//                    searchData('');
//                    routerPush(_path);
//                }}
//        menuItems={menu}
//        isOpen={isOpen}
//        title={translate.MENU}
//    />
//    <SplitterContent>
//        <Page
//            renderToolbar={() => toolbar(getTitleFromPath(path), openMenu)}
//            onInit={onInit(generateData, bookIndex)}
//        >
//            {children}
//        </Page>
//    </SplitterContent>
//</Splitter>

//
App.propTypes = {
//    bookIndex: PropTypes.object,
//    children: PropTypes.element,
//    closeMenu: PropTypes.func.isRequired,
//    generateData: PropTypes.func.isRequired,
//    isOpen: PropTypes.bool.isRequired,
    openMenu: PropTypes.func.isRequired,
//    path: PropTypes.string,
//    routerPush: PropTypes.func,
//    searchData: PropTypes.func.isRequired,
//    translate: PropTypes.object,
};

const mapStateToProps = state => ({
//    bookIndex: state.resources.bookIndex,
//    isOpen: state.app.isOpen,
//    path: state.routing.locationBeforeTransitions.get('pathname'),
//    translate: state.translation.translate.HEADLINES,
});
const actionList = {
//    closeMenu: appActions.closeMenu,
//    generateData: resourcesActions.generateData,
    openMenu: appActions.openMenu,
//    routerPush: routerActions.push,
//    searchData: resourcesActions.searchData,
//
};

export default connector(mapStateToProps, actionList)(App);
//export default App;
