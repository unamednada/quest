const calculateMass = vec => {
    return vec.reduce((sum, current) => sum + current.length, 0);
}