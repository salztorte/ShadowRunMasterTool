//@flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';
import Page from 'grommet/components/App';

import { routerActions } from 'react-router-redux';
import backgroundSkyline from '../Resources/Background/Skyline.jpg';

import Menu from './Menu.jsx';
//import { searchIndexActions } from '../SearchIndex';

import { actions } from './Actions';

export const App:Function = ({
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
                <Menu
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


App.propTypes = {
    children: PropTypes.element,
    closeMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    routerPush: PropTypes.func,
    translate: PropTypes.object,
};

const mapStateToProps = state => {
    console.log(state);
    return {
        bookIndex: state.searchIndex.bookIndex,
            isOpen: state.app.isOpen,
        translate: state.translation.translate.MENU,
    }
};

const actionList = {
    closeMenu: actions.closeMenu,
    openMenu: actions.openMenu,
    routerPush: routerActions.push,
};

export default connect(mapStateToProps, actionList)(App);
