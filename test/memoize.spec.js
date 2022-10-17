var assert = require('assert');
const memoize = require('../src/memoize')


describe('Memoize', function () {
  describe('Check return 1', function () {
    it('should return 1 from memoize', function () {
      assert.equal(memoize(), 1);
      assert.equal(memoize(), 1);
    });
    it('should return 1 from memoize', function () {
      assert.equal(memoize(), 1);
      assert.equal(memoize(), 1);
    });
  });
});