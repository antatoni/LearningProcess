let input = ['5 6',
    '1 3 2 2 2 4',
    '3 3 3 2 4 4',
    '4 3 1 2 3 3',
    '4 3 1 3 3 1',
    '4 3 3 3 1 1'];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const [row, col] = gets().split(' ').map(Number);

const matrix = [];

for (let i = 0; i < row; i++) {
    matrix[i] = gets().split(' ').map(Number);
    if (matrix[i].includes(0)) {
    }
}


function largestSurfaceBFS(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let maxSize = 0;

    // Directions for exploring neighbors (up, down, left, right)
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    function bfs(startRow, startCol, value) {
        const queue = [[startRow, startCol]];
        visited[startRow][startCol] = true;
        let size = 0;

        while (queue.length > 0) {
            const [row, col] = queue.shift();
            size++;

            // Explore all 4 neighbors
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    !visited[newRow][newCol] &&
                    matrix[newRow][newCol] === value
                ) {
                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                }
            }
        }

        return size;
    }

    // Iterate through the matrix
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!visited[row][col]) {
                const currentSize = bfs(row, col, matrix[row][col]);
                maxSize = Math.max(maxSize, currentSize);
            }
        }
    }

    return maxSize;
}

console.log(largestSurfaceBFS(matrix));