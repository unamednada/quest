const scan = vec => {
    indexes = [];
    vec.forEach((item, index) => {
        if (item == "contraband") {
            indexes.push(index);
        }
    })
    return indexes;
}