const { assert, expect } = require('chai');
const intersection = require('../intersection');

const __FIXTURES__ = require('./fixtures/data');

describe('intersection', function () {
  __FIXTURES__.intersection.forEach((fixture) => {
    describe(fixture.name, function () {
      const result = intersection(fixture.input);

      it('should return array type', () => assert.isArray(result));
      return fixture.expected.length === 0
        ? it('should return empty array', () => expect(result).to.be.empty)
        : it('should return the correct intersection', () => expect(result).to.have.members(fixture.expected));
    });
  });
});