var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['TKW to Seeds/lb'] = function () {
  assert.strictEqual(convert(302.39).from('TKW').to('Seeds/lb'), 1500)
};

tests['Seeds/lb to TKW'] = function () {
  var expected = 302.39
      , actual = convert(1500).from('Seeds/lb').to('TKW');
  assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
