import test from '../../test';

describe('aw-test', () => {
    it('should return true', () => {
        const bool = true;
        expect(test.bool(bool)).to.equal(bool);
    })
})
