/* eslint import/no-extraneous-dependencies: 0
 no-unused-expressions: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import SideMenu from './SideMenu.jsx';

chai.use(spies);

const setup = () => {
    const props = {
        closeMenu: chai.spy(),
        goToRoute: chai.spy(),
        isOpen: false,
        menuItems: [{
            title: 'test1',
            path: 'test1',
        }, {
            title: 'test2',
            path: 'test2',
        }],
        title: '',
    };
    const wrapper = shallow(<SideMenu {...props} />);
    return { props, wrapper };
};

describe('<SideMenu />', () => {
    it('should call clickIcon', () => {
//        const { wrapper, props } = setup();
//        expect(wrapper.children().find('test1')).to.have.length(1);



//        wrapper.find('Menu').parent().simulate('click');
//        expect(props.toggleMenu).have.been.called.once;
    });
});
