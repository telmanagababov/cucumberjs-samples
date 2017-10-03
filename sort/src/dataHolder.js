class DataHolder {
    constructor(sortAlgorithm) {
        this.sort = sortAlgorithm;
    }

    setData(data) {
        this.data = data;
        this.sortedData = this.sort(data);
    }
}

module.exports = DataHolder;