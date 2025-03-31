/**
 * @param {number[][]} grid
 * @return {number}
 */
grid =
    [[1, 0], [0, 1]]
var countServers = function (grid) {
    let current;
    let last;
    let lastRow;
    let lastCol;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                current = grid[row][col];
                if (current === 1 && last === 'visited') {
                    grid[row][col] = 'counted'
                    grid[lastRow][lastCol] = 'counted'
                } else {
                    grid[row][col] = 'visited'
                    lastRow = row;
                    lastCol = col;
                }

                last = 'visited';
            }
        }
        last = 0;
    }
    lastRow = 0;
    lastCol = 0;
    for (let row = 0; row < grid[0].length; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (grid[col][row] === 'visited') {
                if (last === 'counted') {
                    grid[col][row] = 'counted';
                } else {
                    lastRow = row;
                    lastCol = col;
                }
                last = 'counted'

            }
            if (grid[col][row] === 'counted') {
                last = 'counted'
                if (grid[lastCol][lastRow] === 'visited') {
                    grid[lastCol][lastRow] = 'counted'
                }

            }
        }
        last = 0;
        lastRow = 0;
        lastCol = 0;
    };
    console.table(grid);
    let total = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'counted') {
                total++;
            }
        }
    }
    return total;
}
console.log(countServers(grid));




// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */

// var countServers = function (grid) {
//     let counter = 0;
//     let current;
//     let last;
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid.length; j++) {
//             current = grid[i][j];
//             if (grid[i][j] === 1) {
//                 if (current === last) {
//                     if (counter === 0) {
//                         counter = 2;
//                     } else {
//                         counter++;
//                     }
//                     grid[i][j] = 0;
//                     grid[i][j - 1] = 0;
//                 }
//             }
//             last = current;
//         }
//     }
//     current = 0;
//     last = 0;
//     let counter2 = 0;
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid.length; j++) {
//             current = grid[j][i];
//             if (grid[j][i] === 1) {
//                 if (current === last) {
//                     if (counter2 === 0) {
//                         counter2 = 2;
//                     } else {
//                         counter2++;
//                     }
//                     grid[j][i] = 0;
//                     grid[j][i - 1] = 0;
//                 }
//             }
//             last = current;
//         }
//     }
//     return counter + counter2;
// };




// let grid = [
//     [1, 1, 0, 1],
//     [1, 0, 1, 1],
//     [0, 0, 1, 0],
//     [0, 0, 1, 1]]
// console.log(countServers(grid))