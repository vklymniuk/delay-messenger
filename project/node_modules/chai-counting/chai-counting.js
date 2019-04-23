module.exports = (chai, utils) => {

  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

  numbers.forEach((number, numeral) => {
    chai.Assertion.addProperty(number, function () {
      this.assert(
        numeral === this._obj,
        `expected #{this} to be ${numeral}`,
        `expected #{this} not to be ${numeral}`
      );
    });
  });

};