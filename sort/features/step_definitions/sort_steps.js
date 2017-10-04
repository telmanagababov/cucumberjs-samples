const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const DataHolder = require('../../src/dataHolder');
const bubbleSort = require('../../src/sort/bubbleSort');
const quickSort = require('../../src/sort/quickSort');
const mergeSort = require('../../src/sort/mergeSort');

defineSupportCode(function ({ Given, Then, When }) {

    Given('a new data holder of {string} type', function (type) {
        switch (type) {
            case 'BubbleSort':
                this.dataHolder = new DataHolder(bubbleSort);
                break;
            case 'QuickSort':
                this.dataHolder = new DataHolder(quickSort);
                break;
            case 'MergeSort':
                this.dataHolder = new DataHolder(mergeSort);
                break;
            default:
                break;
        }
    });
    
    When('data set to {string}', function (data) {
        this.inputData = this.stringToArray(data);
        this.dataHolder.setData(this.inputData);
    });

    Then('data should be unchanged.', function () {
        assert.deepEqual(this.inputData, this.dataHolder.data);
    });

    Then('sortedData should be equal to {string}', function (data) {
        let sortedData = this.stringToArray(data);
        assert.deepEqual(this.dataHolder.sortedData, sortedData);
    });
});