var {defineSupportCode} = require('cucumber');

function CustomWorld() {
    return {
      dataHolder: null,
      inputData: null,
      stringToArray: stringToArray,
      tableToArray: tableToArray
    };

    function stringToArray(data) {
        return data.replace(/\s+/g, '').split(',').map(toNumber);
    }

    function tableToArray(dataTable) {
      return dataTable.raw()[0].map(toNumber);
    }
    
    function toNumber(value) {
      return parseInt(value);
    }
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
});