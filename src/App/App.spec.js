/* eslint import/no-extraneous-dependencies: 0
 no-unused-expressions: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import Menu from 'grommet/components/icons/base/Menu';

import { App, createMenu } from './App.jsx';
import Toolbar from './Toolbar.jsx';
import SideMenu from './SideMenu.jsx';

import GER from '../store/languages/ger';
chai.use(spies);

const setup = () => {
    const props = {
        //muss nicht getestet werden da es weitergereicht wird
        closeMenu: () => {
        },
        isOpen: true,
        openMenu: chai.spy(),
        path: 'test',
        routerPush: chai.spy(),
        translate: GER.HEADLINES,
    };
    const wrapper = shallow(<App {...props} />);
    return { props, wrapper };
};

describe('<App/>', () => {
    it('should render the Toolbar', () => {
        const { props, wrapper } = setup();
        const expectedToolbar = <Toolbar
            title={''}
            toggleMenu={props.openMenu}
            icon={<Menu size="small" />}
        />;

        expect(wrapper.find('Toolbar').equals(expectedToolbar)).to.be.true;
    });

    it('should render the SideMenu', () => {
        const { props, wrapper } = setup();
        const expectedSideMenu = <SideMenu
            title={props.translate.MENU}
            goToRoute={props.routerPush}
            menuItems={createMenu(props.translate)}
            closeMenu={props.closeMenu}
        />;

        expect(wrapper.find('SideMenu').equals(expectedSideMenu)).to.be.true;
    });

});
