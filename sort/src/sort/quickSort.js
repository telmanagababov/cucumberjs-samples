function quickSort(data) {
    if (data.length === 1) {
        return data;
    } else {
        const { low, high } = partition(data);
        return merge(
            quickSort(low),
            quickSort(high)
        );
    }
}

function partition(data) {
    let pivot = getPivot(data),
        low = [],
        high = [];
    data.forEach(item => {
        if (item <= pivot) {
            low.push(item);
        } else {
            high.push(item);
        }
    });
    return { low, high };
}

function getPivot(data) {
    const firstI = 0,
        lastI = data.length - 1,
        middleI = Math.floor((firstI + lastI) / 2);
    return Math.floor((data[firstI] + data[middleI] + data[lastI]) / 3);
}

function merge(low, high) {
    return low.concat(high);
}

module.exports = quickSort;