let input = ['5',
    '1 22 3 41 5 2',
    '2 13 4 -5 6 5',
    '-6 5 9 31 2 8',
    '3 14 5 -6 7 4',
    '4 -5 6 -7 8 7',
    '-3 -3 3 3 4 -3 -4 3'];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const numOfArr = Number(gets());

const matrix = [];

for (let i = 0; i < numOfArr; i++) {
    let matrixRows = gets().split(' ').map(num => Number(num));
    matrix.push(matrixRows);
}

let cordArr = gets().split(' ');
let copyArr = cordArr.copyWithin();
let cordArrSplitted = [];
let value = [];


for (let i = 0; i < cordArr.length; i += 2) {
    value.push(copyArr[i]);
    value.push(copyArr[i + 1]);
    cordArrSplitted.push(value);
    value = [];
}

let currentSum = 0;
let biggestSum = 0;
let rows;
let colms;
let currenCord;
console.table(matrix);

for (let i = 0; i < cordArrSplitted.length; i++) {
    currenCord = cordArrSplitted[i];
    rows = Number(currenCord[0]);
    colms = Number(currenCord[1]);
    if (rows >= 0) {
        for (let j = 0; j < Math.abs(colms); j++) {
            currentSum += Number(matrix[rows - 1][j]);

            if (j + 1 === Math.abs(colms)) {
                if (colms < 0) {
                    for (let k = Math.abs(rows); k <= numOfArr - 1; k++) {
                        currentSum += Number(matrix[k][j]);
                    }
                } else {
                    for (let k = Math.abs(rows) - 2; k >= 0; k--) {
                        currentSum += Number(matrix[k][j]);
                    }
                }
            }
        }
    } else if (rows < 0) {
        for (let j = matrix[Math.abs(rows)].length - 1; j > Math.abs(colms) - 2; j--) {
            currentSum += Number(matrix[Math.abs(rows) - 1][j]);

            if (j - 1 === Math.abs(colms) - 2) {
                if (colms < 0) {
                    for (let k = Math.abs(rows); k < numOfArr; k++) {
                        currentSum += Number(matrix[k][j]);
                    }
                } else {
                    for (let k = Math.abs(rows) - 2; k >= 0; k--) {
                        currentSum += Number(matrix[k][j]);
                    }
                }
            }
        }

    }
    if (currentSum > biggestSum) {
        biggestSum = currentSum;
    }
    currentSum = 0;
}


console.log(biggestSum)