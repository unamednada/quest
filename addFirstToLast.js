const addFirstToLast = vec => {
    if (vec.length > 0) {
        return vec[0] + vec[vec.length - 1];
    }
    return "";
}