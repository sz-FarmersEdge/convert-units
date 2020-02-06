var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['TKW to seeds/lb'] = function () {
  assert.strictEqual(convert(302.39).from('TKW').to('seeds/lb'), 1500)
};

tests['seeds/lb to TKW'] = function () {
  var expected = 302.39
      , actual = convert(1500).from('seeds/lb').to('TKW');
  assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
