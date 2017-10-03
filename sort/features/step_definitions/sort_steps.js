const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const DataHolder = require('../../src/dataHolder');
const bubbleSort = require('../../src/sort/bubbleSort');

defineSupportCode(function ({ Given, Then, When }) {
    let dataHolder = null,
        inputData = null;

    Given('a new data holder of {string} type', function (type) {
        switch (type) {
            case 'Bubble':
                dataHolder = new DataHolder(bubbleSort);
                break;
            default:
                break;
        }
    });

    When('data set to {string}', function (data) {
        inputData = toArray(data);
        dataHolder.setData(inputData);
    });

    Then('data should be unchanged.', function () {
        assert.deepEqual(inputData, dataHolder.data);
    });
    
    Then('sortedData should be equal to {string}', function (data) {
        let sortedData = toArray(data);
        assert.deepEqual(dataHolder.sortedData, sortedData);
    });

    function toArray(data) {
        return data.replace(/\s+/g, '').split(',');
    }
});