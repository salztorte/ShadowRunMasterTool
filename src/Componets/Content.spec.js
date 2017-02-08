import React from 'react';
import Box from 'grommet/components/Box';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Toolbar from './Toolbar.jsx';
import Content from './Content.jsx';

describe('<Content/>', function () {
    it('should render a toolbar', function () {
        const wrapper = shallow(<Content title="Testtoolbar" />);
        expect(wrapper.find('Toolbar')).to.have.length(1);
//        expect(wrapper.find('Box')).to.have.length(1);
    });

//    it('should have props for email and src', function () {
//        const wrapper = shallow(<Avatar/>);
//        expect(wrapper.props().email).to.be.defined;
//        expect(wrapper.props().src).to.be.defined;
//    });
});
