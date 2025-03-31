let input = ['3 4',
    '0 1 1 1',
    '1 1 0 0',
    '1 1 0 1',
    '1 0 1 1',
    '1 0 0 0',
    '1 1 1 1',
    'Shoot 2 3',
    'Shoot 1 1',
    'Shoot 2 1',
    'Shoot 0 0',
    'Shoot 1 1',
    'Shoot 1 1',
    'Shoot 2 1',
    'Shoot 2 3',
    'END'];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const initVal = gets().split(' ');
const rows = Number(initVal[0]);
const colms = Number(initVal[1]);

let matrix1 = [];
let matrix2 = [];





for (let i = 0; i < rows; i++) {
    let value = gets().split(' ').map(num => Number(num));
    matrix1.push(value);
}


for (let j = rows; j > 0; j--) {
    let value = gets().split(' ').reverse().map(num => Number(num));
    matrix2.push(value);
}
matrix2.reverse();

console.table(matrix1);
console.table(matrix2);


let firstScore = 0;
let secondScore = 0;
let roundCounter = 0;



let command = gets().split(' ');



while (command[0] !== "END") {
    let cord1 = Number(command[1]);
    let cord2 = Number(command[2]);
    if (roundCounter % 2 === 0) {
        if (matrix2[cord1][cord2] == 0) {
            console.log(`Missed`);
        } else if (matrix2[cord1][cord2] == 1) {
            console.log(`Booom`);
            matrix2[cord1][cord2] = 'shot'
        } else {
            console.log(`You already shot there!`)
        }
    } else {
        if (matrix1[cord1][cord2] == 0) {
            console.log(`Missed`);
        } else if (matrix1[cord1][cord2] == 1) {
            console.log(`Booom`);
            matrix1[cord1][cord2] = 'shot'
        } else {
            console.log(`You already shot there!`)
        }
    }

    roundCounter++;

    command = gets().split(' ');

}

console.table(matrix1);
console.table(matrix2);

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colms; j++) {
        if (matrix1[i][j] == 1) {
            firstScore++;
        }
        if (matrix2[i][j] == 1) {
            secondScore++;
        }
    }
}

const finalScore = `${firstScore}:${secondScore}`

console.log(finalScore)