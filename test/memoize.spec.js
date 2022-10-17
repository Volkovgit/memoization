var assert = require('assert');
const memoize = require('../src/memoize');

describe('Memoize', function () {

  const addTen = (x)=>{
    return x+10
  }

  const memTest = memoize(addTen);
  
  describe('Check return 4', function () {
    it('should return 12', function () {
      assert.equal(memTest(2), 12);
    });
    it('should return 13 by count', function () {
      assert.equal(memTest(3), 13);
    });
    it('should return 13 from "cache" ', function () {
      assert.equal(memTest(3), 13);
    });
    
  });
});
