const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const Logger = require('../../src/logger');

defineSupportCode(function ({ Given, Then, When }) {
    let logger = null,
        result = null;

    Given('a new logger of type {string} is created', function (type) {
        logger = new Logger(type); 
    });
    
    When('logged data {string}', function (data) {
        result = logger.log(data);
    });

    Then('should log {string}', function (data) {
        assert.equal(result, data);
    });
});