const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const chai_counting = require('../chai-counting');
chai.use(chai_counting);

describe('chai-counting', () => {

  describe('zero', function() {
    it('should be defined', () => {
      expect(() => expect(1).to.be.zero).to.throw(Error);
    });

    it('should be true when the actual value is 1', () => {
      expect(0).to.be.zero;
      0..should.be.zero;
    });

    it('should be false when the actual value is not 1', function() {
      expect(1).not.to.be.zero;
      1..should.not.be.zero;
      expect('0').not.to.be.zero;
      '0'.should.not.be.zero;
    });

  });

  describe('one', function() {
    it('should be defined', () => {
      expect(() => expect(0).to.be.one).to.throw(Error);
    });

    it('should be true when the actual value is 1', () => {
      expect(1).to.be.one;
      1..should.be.one;
    });

    it('should be false when the actual value is not 1', function() {
      expect(0).not.to.be.one;
      0..should.not.be.one;
      expect('1').not.to.be.one;
      '1'.should.not.be.one;
    });

  });

  describe('two', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.two).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(2).to.be.two;
      2..should.be.two;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.two;
      0..should.not.be.two;
      expect('2').not.to.be.two;
      '2'.should.not.be.two;
    });
  });

  describe('three', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.three).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(3).to.be.three;
      3..should.be.three;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.three;
      0..should.not.be.three;
      expect('3').not.to.be.three;
      '3'.should.not.be.three;
    });
  });

  describe('four', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.four).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(4).to.be.four;
      4..should.be.four;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.four;
      0..should.not.be.four;
      expect('4').not.to.be.four;
      '4'.should.not.be.four;
    });
  });

  describe('five', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.five).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(5).to.be.five;
      5..should.be.five;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.five;
      0..should.not.be.five;
      expect('5').not.to.be.five;
      '5'.should.not.be.five;
    });
  });

  describe('six', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.six).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(6).to.be.six;
      6..should.be.six;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.six;
      0..should.not.be.six;
      expect('6').not.to.be.six;
      '6'.should.not.be.six;
    });
  });

  describe('seven', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.seven).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(7).to.be.seven;
      7..should.be.seven;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.seven;
      0..should.not.be.seven;
      expect('7').not.to.be.seven;
      '7'.should.not.be.seven;
    });
  });

  describe('eight', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.eight).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(8).to.be.eight;
      8..should.be.eight;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.eight;
      0..should.not.be.eight;
      expect('8').not.to.be.eight;
      '8'.should.not.be.eight;
    });
  });

  describe('nine', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.nine).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(9).to.be.nine;
      9..should.be.nine;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.nine;
      0..should.not.be.nine;
      expect('9').not.to.be.nine;
      '9'.should.not.be.nine;
    });
  });

  describe('ten', () => {
    it('should be defined', () => {
      expect(() => expect(0).to.be.ten).to.throw(Error);
    });

    it('should be true when the actual value is 2', () => {
      expect(10).to.be.ten;
      10..should.be.ten;
    });

    it('should be false when the actual value is not 2', () => {
      expect(0).not.to.be.ten;
      0..should.not.be.ten;
      expect('10').not.to.be.ten;
      '10'.should.not.be.ten;
    });
  });

  describe('eleven', () => {
    it('should not be defined', () => {
      expect(() => expect(0).to.be.eleven).not.to.throw(Error);
    });
  });

});