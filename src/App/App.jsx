//import styles
import 'grommet/scss/vanilla/index';

import { PropTypes } from 'react';

import GromApp from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import { routerActions } from 'react-router-redux';

//import Toolbar from './Toolbar.jsx';
//import SideMenu from './SideMenu.jsx';
import { resourcesActions } from '../Resources';

import { appActions } from './AppActions';
import { connector } from '../tools';

//const leftToolbar = openMenu => <ToolbarButton onClick={openMenu}>
//    <Icon icon="ion-navicon, material:md-menu"/>
//</ToolbarButton>;
//const toolbar = (title, openMenu) => <Toolbar title={title} leftToolbar={leftToolbar(openMenu)}/>;

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
const App = () =>{
    return (
        <GromApp centered={false}>
            <Header
                direction="row"
                justify="between"
                large
                pad={{ horizontal: 'medium' }}
            >
                <Title>Grommet standalone</Title>
            </Header>
        </GromApp>
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
//App.propTypes = {
//    bookIndex: PropTypes.object,
//    children: PropTypes.element,
////    closeMenu: PropTypes.func.isRequired,
////    generateData: PropTypes.func.isRequired,
////    isOpen: PropTypes.bool.isRequired,
////    openMenu: PropTypes.func.isRequired,
//    path: PropTypes.string,
//    routerPush: PropTypes.func,
////    searchData: PropTypes.func.isRequired,
//    translate: PropTypes.object,
//};

//const mapStateToProps = state => ({
//    bookIndex: state.resources.bookIndex,
//    isOpen: state.app.isOpen,
//    path: state.routing.locationBeforeTransitions.get('pathname'),
//    translate: state.translation.translate.HEADLINES,
//});
//const actionList = {
//    closeMenu: appActions.closeMenu,
//    generateData: resourcesActions.generateData,
//    openMenu: appActions.openMenu,
//    routerPush: routerActions.push,
//    searchData: resourcesActions.searchData,
//
//};

//export default connector(mapStateToProps, actionList)(App);
export default App;
