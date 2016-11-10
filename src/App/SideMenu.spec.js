/* eslint import/no-extraneous-dependencies: 0
 no-unused-expressions: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import SideMenu from './SideMenu.jsx';
import Toolbar from './Toolbar.jsx';
import SideMenuItems from './SideMenuItems.jsx';

chai.use(spies);

const setup = () => {
    const props = {
        title: 'test',
        goToRoute: chai.spy(),
        closeMenu: chai.spy(),
        menuItems: [{
            title: 'test1',
            path: 'test1',
        }, {
            title: 'test2',
            path: 'test2',
        }],
    };
    const wrapper = shallow(<SideMenu {...props} />);
    return { props, wrapper };
};

describe('<SideMenu />', () => {
    it('should render Toolbar and SideMenuItems', () => {
        const { props, wrapper } = setup();
        expect(wrapper.find('Toolbar').equals(<Toolbar title={props.title} />)).to.be.true;
        expect(wrapper.find('SideMenuItems').is('Menu')).to.be.true;
    });

});

