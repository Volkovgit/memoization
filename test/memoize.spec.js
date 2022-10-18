var assert = require('assert');
const { expect } = require('chai');
const memoize = require('../src/memoize');

describe('Memoize', function () {
  it('Should be a function', () => {
    expect(memoize).to.be.a('function');
  });

  describe('Should return cached function that', () => {
    const addTenTestFunction = (...args) => {
      return args.reduce((sum,el) => sum+el);
    };

    const memTest = memoize(addTenTestFunction);

    // describe('Check reterned values', function () {
    //   it('should return 12', function () {
    //     assert.equal(memTest(2), 12);
    //   });
    //   it('should return 13 by count', function () {
    //     assert.equal(memTest(3), 13);
    //   });
    //   it('should return 13 from "cache" ', function () {
    //     assert.equal(memTest(3), 13);
    //   });
    //   it('should return a10 from "cache" ', function () {
    //     assert.equal(memTest('a'), 'a10');
    //   });
    // });

    it('Is not equal to the original function',() => {
      expect(memTest).to.be.a('function').and.not.to.equal(addTenTestFunction)
    })

  });

  
});
