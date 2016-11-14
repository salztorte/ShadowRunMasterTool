/* eslint import/no-extraneous-dependencies: 0
 no-unused-expressions: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';


describe('<App/>', () => {
    it('app', () => {
        expect(1).to.be.equal(1);
    });
});