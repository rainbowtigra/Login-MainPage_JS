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

describe('Validation Util', function() {
    describe('#isEmail()', function() {
        it('should return true if string is email', function() {
            assert.equal(true, validationUtil.isEmail('abcdes@gmail.com'));
        });
        it('should return false if string not contain @', function() {
            assert.equal(false, validationUtil.isEmail('sdfves.com'));
        });
        it('should return false if string not contain .', function() {
            assert.equal(false, validationUtil.isEmail('sdfves@gmail'));
        });
    });
});

describe('Validation Util', function() {
    describe('#isPhone()', function() {
        it('should return true if string is phone', function() {
            assert.equal(true, validationUtil.isPhone('+380501234567'));
        });
        it('should return false if string contain letters', function() {
            assert.equal(false, validationUtil.isEmail('sndgf'));
        });
        it('should return false if string not contain full number', function() {
            assert.equal(false, validationUtil.isEmail('+38050'));
        });
    });
});

describe('Validation Util', function() {
    describe('#isEmptyOrSpaces()', function() {
        it('should return true if string is empty', function() {
            assert.equal(true, validationUtil.isEmptyOrSpaces(''));
        });
        it('should return false if string is not empty', function() {
            assert.equal(false, validationUtil.isEmptyOrSpaces('manfnfnffn'));
        });
    });
});

describe('Validation Util', function() {
    describe('#isMinLength()', function() {
        it('should return true if string length is right', function() {
            assert.equal(true, validationUtil.isMinLength('cc11vv22nn11!'));
        });
        it('should return false if string length is not right', function() {
            assert.equal(false, validationUtil.isMinLength('1234567'));
        });
    });
});

describe('Validation Util', function() {
    describe('#isContainsSpecialCharacters()', function() {
        it('should return true if password contain special characters', function() {
            assert.equal(true, validationUtil.containsSpecialCharacters('pass!pass'));
        });
        it('should return false if password contain special characters', function() {
            assert.equal(false, validationUtil.containsSpecialCharacters('passpass'));
        });
    });
});
