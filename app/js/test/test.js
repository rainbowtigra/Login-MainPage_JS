var assert = require('assert');
var validationUtil = require('../validationUtil');

describe('Validation Util', function() {
    describe('#isAlpha()', function() {
        it('should return true if string is alphabetic', function() {
            assert.equal(true, validationUtil.isAlpha('abc'));
        });
        it('should return false if string contains numbers', function() {
            assert.equal(false, validationUtil.isAlpha('abc2'));
        });
    });
});