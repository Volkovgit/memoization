var assert = require('assert');
const { expect } = require('chai');
const memoize = require('../src/memoize');
const sinon = require('sinon');

describe('Memoize', function () {
  it('Should be a function', () => {
    expect(memoize).to.be.a('function');
  });

  it('Should return undefined if no function provided', () => {
    [undefined, 123, '123', [], {}].forEach((param) => {
      expect(memoize(param)).to.be.a('undefined');
    });
  });

  it('Should return function if function provided', () => {
    const functionResult = memoize(Array.prototype.forEach);
    const expectedResult = 'function';
    expect(functionResult).to.be.a(expectedResult);
  });

  describe('Check return values', () => {
    const addTen = (x) => {
      return x + 10;
    };

    const arraySumm = (args) => {
      const arraySumm = args.reduce((summ, el) => summ + el);
      return arraySumm
    };

    let memoizedArraySumm;
    let memoizedAddTen;
    beforeEach(() => {
      memoizedAddTen = memoize(addTen);
      memoizedArraySumm = memoize(arraySumm);
    });

    it('Return null if dont provided arguments in function', () => {
      const functionResult = memoizedAddTen();
      const expectedResult = null;
      expect(functionResult).to.equal(expectedResult);
    });

    it('Should return number above 10', () => {
      const functionResult = memoizedAddTen(10);
      const expectedResult = 20;
      expect(functionResult).to.equal(expectedResult);
    });

    it('Should return string with 10 in end', () => {
      const functionResult = memoizedAddTen('one');
      const expectedResult = 'one10';
      expect(functionResult).to.equal(expectedResult);
    });

    describe('Should return value from array', () => {
      it('When array is all string', () => {
        const functionResult = memoizedArraySumm(['one','two','three']);
        const expectedResult = 'onetwothree';
        console.log(functionResult);
        expect(functionResult).to.equal(expectedResult);
      });
      it('When array is all numbers', () => {
        const functionResult = memoizedArraySumm([1,2,3]);
        const expectedResult = 'onetwothree';
        console.log(functionResult);
        expect(functionResult).to.equal(expectedResult);
      });
    });
  });
});
