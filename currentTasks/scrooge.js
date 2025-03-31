let input = ['4 3',
    '3 2 4',
    '2 0 3',
    '1 1 5',
    '2 2 5'];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const size = gets().split(' ').map(num => Number(num));
const rowSize = size[0];
const colSize = size[1];
const matrix = [];

for (let i = 0; i < rowSize; i++) {
    let value = gets().split(' ').map(num => Number(num));
    matrix[i] = value;
}
let start;

for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
        if (matrix[i][j] === 0) {
            start = [i, j]
            break;
        }
    }
}

let currentPosition = start;
let isOut = false;
let coinSum = 0;

while (!isOut) {
    let row = currentPosition[0];
    let col = currentPosition[1];
    let left;
    let right;
    let up;
    let down;
    if ((col - 1) < 0) {
        left = 0;
    } else {
        left = matrix[row][col - 1];
    }
    if ((col + 1) > colSize - 1) {
        right = 0;
    } else {
        right = matrix[row][col + 1];
    }
    if ((row - 1) < 0) {
        up = 0;
    } else {
        up = matrix[row - 1][col];
    }
    if ((row + 1) > rowSize - 1) {
        down = 0;
    } else {
        down = matrix[row + 1][col];
    }
    let sideObj = {
        left: left,
        right: right,
        up: up,
        down: down
    }

    let entries = Object.entries(sideObj);
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] === undefined) {
            entries[i][1] = 0;
        }
    }
    let sorted = entries.sort((a, b) => b[1] - a[1]);
    let found = false;
    let sortedObj = {};
    for (value of sorted) {
        let name = value[0];
        let data = value[1];
        sortedObj[name] = data;
    }
    let keys = Object.keys(sortedObj);

    if (sortedObj[keys[0]] === sortedObj[keys[1]]) {
        if (sortedObj.left === 0 && sortedObj.right === 0 && sortedObj.up === 0 && sortedObj.down === 0) {
            console.log(coinSum)
            found = true;
            break;
        }
        let equalObj = {};
        let keys = Object.keys(sortedObj);
        let targetKey = keys[0];
        for (let key in sortedObj) {
            let target = sortedObj[targetKey];
            if (sortedObj[key] === target) {
                equalObj[key] = target;
            }
            if (equalObj.hasOwnProperty('left')) {
                col--;
                break;
            } else if (equalObj.hasOwnProperty('right')) {
                col++;
                break;
            } else if (equalObj.hasOwnProperty('up')) {
                row--;
                break;
            } else if (equalObj.hasOwnProperty('down')) {
                row++;
                break;
            }
        }


    } else {
        if (keys[0] === 'left') {
            col--;
        } else if (keys[0] === 'right') {
            col++;
        } else if (keys[0] === 'up') {
            row--;
        } else if (keys[0] === 'down') {
            row++;
        }
    }

    currentPosition = [row, col];
    if (matrix[row][col] > 0) {
        matrix[row][col]--;
        coinSum++;
    }

}

