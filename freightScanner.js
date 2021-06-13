const scan = vec => {
    let count = 0;
    vec.forEach(item => {
        if (item == "contraband") {
            count++;
        }
    })
    return count;
}