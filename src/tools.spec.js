import { keyMirror } from './tools';

describe('Tools', () => {
    describe('keymirror', () => {
        it('should retun then rigth JSON', () => {
            const incomming = ['a', 'b', 'c'];
            const exceptedResult = {
                a: 'a',
                b: 'b',
                c: 'c',
            };

            expect(keyMirror(incomming)).toEqual(exceptedResult);

        });
    });
});
