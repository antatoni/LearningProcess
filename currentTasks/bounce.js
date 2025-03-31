let input = [``];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const size = gets().split(" ").map(Number);
const rows = size[0];
const cols = size[1];

let rowNum = BigInt(1);
let colNum = BigInt(1);
let matrix = [];
for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let k = 0; k < cols; k++) {
        matrix[i][k] = rowNum;
        rowNum *= BigInt(2);
    }
    colNum *= BigInt(2);
    rowNum = colNum;
}
let sum = BigInt(1);
const rightDown = [1, 1];
const rightUp = [-1, 1];
const leftUp = [-1, -1];
const leftDown = [1, -1];

let position = [0, 0];

let dir = rightDown
let rowDirection = 1;
let colDirection = 1;
let currRow = 0;
let currCol = 0;


let isntCorner = true;

if (size[0] === 0 && size[1] === 0) {
    sum = BigInt(0);
    isntCorner = false
}
if (size[0] === 1 && size[1] === 1) {
    sum = BigInt(1);
    isntCorner = false
}
if (size[0] === 0 && size[1] === 1) {
    sum = BigInt(1);
    isntCorner = false;
}
if (size[0] === 1 && size[1] === 0) {
    sum = BigInt(1);
    isntCorner = false;
}
while (isntCorner) {
    currRow += rowDirection
    currCol += colDirection

    if (currRow === rows - 1) {
        rowDirection = -1
    }
    else if (currRow === 0) {
        rowDirection = +1

    }
    else if (currCol === cols - 1) {

        colDirection = -1
    }
    else if (currCol === 0) {
        colDirection = +1
    }

    sum += BigInt(matrix[currRow][currCol]);

    if (currRow === 0 && currCol === 0) {
        isntCorner = false;
    } else if (currRow === 0 && currCol === cols - 1) {
        isntCorner = false;
    } else if (currRow === rows - 1 && currCol === 0) {
        isntCorner = false;
    } else if (currRow === rows - 1 && currCol === cols - 1) {
        isntCorner = false;
    }
}

console.log(sum.toString())