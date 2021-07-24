var numIslands = function (grid) {
    let traversed = {};
    let counter = 0;
    function traverseFrom(i, j) {
        if (grid[i, j] == "0") {
            return;
        }

        traversed[`${i},${j}`] = true;

        if (
            j - 1 >= 0 &&
            grid[i][j - 1] == "1" &&
            !traversed[`${i},${j - 1}`]
        ) {
            traverseFrom(i, j - 1);
        }

        if (
            i - 1 >= 0 &&
            grid[i - 1][j] == "1" &&
            !traversed[`${i - 1},${j}`]
        ) {
            traverseFrom(i - 1, j);
        }

        if (
            i + 1 < grid.length &&
            grid[i + 1][j] == "1" &&
            !traversed[`${i + 1},${j}`]
        ) {
            traverseFrom(i + 1, j);
        }
        if (
            j + 1 < grid[i].length &&
            grid[i][j + 1] == "1" &&
            !traversed[`${i},${j + 1}`]
        ) {
            traverseFrom(i, j + 1);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1" && !traversed[`${i},${j}`]) {
                traverseFrom(i, j);
                counter++;
            }
        }
    }

    return counter;
};

console.log(
    numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ])
);

// [
//     ["1", "1", "1"],
//     ["0", "1", "0"],
//     ["1", "1", "1"],
// ]
