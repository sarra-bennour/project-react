const countOccurrences = (arr) => {
    return arr.flat().reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
};

export default countOccurrences;