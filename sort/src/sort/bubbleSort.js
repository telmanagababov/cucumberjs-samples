function bubbleSort(toSort) {
    let sorted = toSort.concat();
    sorted.forEach((iItem, i) => {
        sorted.forEach((jItem, j) => {
            if(iItem < jItem) {
                [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
            }
        });
    });
    return sorted;
}

module.exports = bubbleSort;