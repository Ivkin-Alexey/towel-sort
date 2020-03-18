module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    return matrix.reduce((flat, current, i) => i % 2 !== 0 ? flat.concat(current.reverse()) : flat.concat(current), []);
};
