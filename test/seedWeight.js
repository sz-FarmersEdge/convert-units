var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['TKW to Seed/lb'] = function () {
  var expected = 1500
      , actual = convert(302.39).from('TKW').to('Seed/lb');
  assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['Seed/lb to TKW'] = function () {
  var expected = 302.39
      , actual = convert(1500).from('Seed/lb').to('TKW');
  assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
