let input = ["6 7 3",
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


const NMJ = gets().split(' ').map(Number);
const N = NMJ[0];
const M = NMJ[1];
const numberOfJumps = NMJ[2];
const RC = gets().split(' ').map(Number);
let R = RC[0];
let C = RC[1];

const rowsArray = [];
const columnsArray = [];


for (let i = 0; i < numberOfJumps; i++) {
    let jumps = gets().split(' ').map(Number);
    rowsArray.push(jumps[0]);
    columnsArray.push(jumps[1]);
}

let fillingValue = 1;
let matrix = [];

for (let i = 0; i < N; i++) {
    matrix[i] = [];
    for (let j = 0; j < M; j++) {
        matrix[i][j] = fillingValue;
        fillingValue++;
    }
}

let jumpsMade = 0;
let sumOfNumbers = 0;
let isFinished = false;

if (matrix[R][C] !== undefined) {
    sumOfNumbers = sumOfNumbers + matrix[R][C];
    jumpsMade++;
    matrix[R][C] = 'visited';
} else {
    console.log(`escaped ${sumOfNumbers}`);
    isFinished = true;
}



if (!isFinished) {
    let index = 0;
    while (index < numberOfJumps) {
        R = R + rowsArray[index];
        C = C + columnsArray[index];

        if (R < 0 || R >= N || C < 0 || C >= M || matrix[R][C] === undefined) {
            console.log(`escaped ${sumOfNumbers}`);
            break;
        }

        if (matrix[R][C] === 'visited') {
            console.log(`caught ${jumpsMade}`);
            break;
        }

        sumOfNumbers = sumOfNumbers + matrix[R][C];
        jumpsMade++;
        matrix[R][C] = 'visited';

        index++;
        if (index === numberOfJumps) {
            index = 0;
        }
    }
}