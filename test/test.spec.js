describe('tests', () => {
    test('should test', () => {
        expect(1).toBe(1);
    });

    test('should be able to write to console', () => {
        expect(console).not.toBe(null);
        console.log('ConsoleTest', 'Hello World!');
    });
});

describe('JavaScript', () => {
    test('should be able to write to typed Arrays given by val', () => {
        const buf = new Uint32Array(3);
        buf[0] = 1;
        buf[1] = 2;
        buf[2] = 3;

        const one = buf[0];
        const two = buf[1];
        const three = buf[2];

        expect(buf.length).toBe(3);

        expect(one).toBe(1);
        expect(two).toBe(2);
        expect(three).toBe(3);
    });
});
