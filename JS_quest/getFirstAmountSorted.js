const getFirstAmountSorted = (vec, num) => {
    vec.sort();
    return vec.slice(0, num);
}