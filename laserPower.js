const calculatePower = vec => {
    return vec.map(item => item * 2).reduce((sum, current) => sum + current, 0);
}