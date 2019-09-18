const { expect } = require('chai');
const multiMap = require('../multiMap');

const fixtures = require('./fixtures/data');

describe('multiMap', function () {
  fixtures.multiMap.forEach((fixture) => {
    describe(fixture.name, function () {
      const result = multiMap(fixture.keys, fixture.callbacks);
      it('keys from result match input', () => expect(result).to.have.keys(fixture.keys));
      it('returns the correct values', () => {
        const actualValues = Object.values(result);
        const expectedValues = Object.values(fixture.expected);
        expect(actualValues).to.eql(expectedValues)
      });
    });
  });
});
