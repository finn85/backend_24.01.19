const { assert } = require('chai');

const customPow = require('./index');

describe(`Testing of customPow() function. This function takes only integer and 
  positive numbers:`, () => {

  describe('1 Positive tests:', () => {
    function powTo3(x) {
      var expected = x * x * x;
      it(`raises the number ${x} to the power 3 and return the result - ${expected}`, () => {
        assert.strictEqual(customPow(x, 3), expected);
      });
    }

    for (let i = 2; i < 5; i++) {
      powTo3(i);
    }

    function powTo5(x) {
      var expected = x * x * x * x * x;
      it(`raises the number ${x} to the power 5 and return the result - ${expected}`, () => {
        assert.strictEqual(customPow(x, 5), expected);
      });
    }

    for (let i = 2; i < 5; i++) {
      powTo5(i);
    }
  });

  describe('2 Negative tests', () => {
    it('2.1 If arguments are missing function return undefined', () => {
      assert.isNaN(customPow());
    });

    it('2.2 If second argument is missing function return first argument', () => {
      assert.isNaN(customPow(2));
      assert.isNaN(customPow(5));
      assert.isNaN(customPow(1565));
    });

    it('2.3 If first argument is negative function return NaN', () => {
      assert.isNaN(customPow(-1, 3));
      assert.isNaN(customPow(-2, 15));
      assert.isNaN(customPow(-20, 25));
    });

    it('2.4 If second argument is negative function return NaN', () => {
      assert.isNaN(customPow(2, -12));
      assert.isNaN(customPow(1, -3));
      assert.isNaN(customPow(20, -25));
    });

    it('2.5 If both arguments are negative function return NaN', () => {
      assert.isNaN(customPow(-2, -12));
      assert.isNaN(customPow(-1, -3));
      assert.isNaN(customPow(-20, -25));
    });

    it('2.6 If fitst argument is float number function return NaN', () => {
      assert.isNaN(customPow(2.1, 12));
      assert.isNaN(customPow(1.5, 3));
      assert.isNaN(customPow(20.7, 25));
    });

    it('2.7 If second argument is float number function return NaN', () => {
      assert.isNaN(customPow(2, 12.1));
      assert.isNaN(customPow(1, 3.5));
      assert.isNaN(customPow(20, 25.7));
    });

    it('2.8 If fitst argument is not a number function return NaN', () => {
      assert.isNaN(customPow('2', 12));
      assert.isNaN(customPow('1', 3));
      assert.isNaN(customPow('20', 25));
    });

    it('2.9 If second argument is not a number function return NaN', () => {
      assert.isNaN(customPow(2, '12'));
      assert.isNaN(customPow(1, '3'));
      assert.isNaN(customPow(20, '25'));
    });
  });
});