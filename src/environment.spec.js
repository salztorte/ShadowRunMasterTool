/* eslint import/no-extraneous-dependencies: 0
          no-unused-expressions: 0
*/
import { expect } from 'chai';

describe('the environment', () => {
    it('works, hopefully', () => {
        expect(1).to.be.equal(1);
    });
    it('should be able to write to console', () => {
        expect(console).not.to.be.equal(null);
        console.log('ConsoleTest', 'Hello World!');
    });

    it('should be able to write to typed Arrays given by val', () => {
        const buf = new Uint32Array(3);
        buf[0] = 1;
        buf[1] = 2;
        buf[2] = 3;

        const one = buf[0];
        const two = buf[1];
        const three = buf[2];

        expect(buf.length).to.be.equal(3);
        expect(one).to.be.equal(1);
        expect(two).to.be.equal(2);
        expect(three).to.be.equal(3);
    });
});
