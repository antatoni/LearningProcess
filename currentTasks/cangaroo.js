let input = ["6 7 1",
    "0 0",
    "2 2",
    "-2 2",
    "3 -1"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const size = gets().split(' ').map(num => Number(num));
const jumps = size.pop();
let row = size[0];
let col = size[1];
const matrix = [];
const startingPosition = gets().split(' ').map(num => Number(num));
let startRow = startingPosition[0];
let startCol = startingPosition[1];
let counter = 1;
for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
        matrix[i][j] = counter;
        counter++;
    }
}
let currJump = 0;
let jumpSum = 0;
let outOfBounds = true;
let caught = true;
let jumpsArr = [];
for (let i = 0; i < jumps; i++) {
    jumpsArr.push(gets().split(' ').map(num => Number(num)));

}
let jumpCounter = 0;
if (startCol > col - 1 || startRow > row - 1 || startCol < 0 || startRow < 0) {
    console.log(`escaped ${jumpCounter}`)
    caught = false;
} else {
    jumpCounter++;
    jumpSum += matrix[startRow][startCol];
    matrix[startRow][startCol] = 'visited';

}
let currRow = startRow;
let currCol = startCol;
while (outOfBounds && caught) {


    for (location of jumpsArr) {
        let rowIncrement = location[0];
        let colIncrement = location[1];
        if (rowIncrement < 0) {
            currRow = currRow - Math.abs(rowIncrement);
        } else {
            currRow = currRow + rowIncrement;
        }

        if (colIncrement < 0) {
            currCol = currCol - Math.abs(colIncrement);
        } else {
            currCol = currCol + colIncrement;
        }

        if (currRow > row - 1 || currCol > col - 1) {
            console.log(`escaped ${jumpSum}`)
            outOfBounds = false;
            break;

        } else if (matrix[currRow][currCol] === 'visited') {
            console.log(`caught ${jumpCounter}`)
            caught = false;
            break;
        } else {
            jumpSum += matrix[currRow][currCol];
            matrix[currRow][currCol] = 'visited';

        }
        jumpCounter++;
    }


}