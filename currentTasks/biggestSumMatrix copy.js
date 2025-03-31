let input = ['5',
    '1 22 3 41 5 2',
    '2 13 4 -5 6 5',
    '-6 5 9 31 2 8',
    '3 14 5 -6 7 4',
    '4 -5 6 -7 8 7',
    '-3 -3 3 3 4 -3 -4 3'
];

const size = Number(gets());
let sum = BigInt(0);
const matrix = [];
let numCol = 1;
let numRow = 1;
let current;
for (let i = 0; i < size; i++) {
    matrix[i] = [];
}


for (let col = 0; col < size; col++) {
    if (col >= 1) {
        numCol = numCol * 2;
    }

    for (let row = 0; row < size; row++) {
        matrix[col][row] = numRow;
        numRow = numRow * 2;
    }
    numRow = numCol * 2
}

console.table(matrix);

for (let i = BigInt(0); i < size; i++) {
    j = i + BigInt(1);


    for (BigInt(j); j < size; j++) {
        current = matrix[i][j];
        sum += BigInt(current);

    }
}
console.log(sum.toString());