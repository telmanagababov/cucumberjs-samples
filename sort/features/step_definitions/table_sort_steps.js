const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function ({ Given, Then, When }) {

    When('data set to', function (dataTable) {
        this.inputData = this.tableToArray(dataTable);
        this.dataHolder.setData(this.inputData);
    });
});