const assert = require('assert');
const Rooster = require('../index');

describe('Rooster Test:', () => {
  describe('Announce Dawn:', () => {
    it('Returns a Rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';
      
      // Call Rooster.announceDawn and store result in variable
      const actual = Rooster.announceDawn();

      // Use an assert method to compare actual and expected result
      assert.strictEqual(actual, expected);
    });
  });
  describe('Time At Dawn Test:', () => {
    it('Returns argument as string', () => {
      const expected = '9';
      const actual = Rooster.timeAtDawn(9);
      assert.strictEqual(actual, expected);
    });
    it('error if time is less than zero', () => {
      assert.throws(()=>{Rooster.timeAtDawn(-4)},RangeError)
    });
    it('error if time is greater than 24', () => {
      assert.throws(()=>{Rooster.timeAtDawn(32)},RangeError)
    });
  });
});
