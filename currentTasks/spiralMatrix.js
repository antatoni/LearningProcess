let input = ['5'];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


let size = Number(input);
let counter = 1;
let matrix = [];

for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
        matrix[i][j] = 0;
    }
}
let rowStart = 0;
let rowEnd = size - 1;
let colStart = 0;
let colEnd = size - 1;
while (rowStart <= rowEnd && colStart <= colEnd) {

    for (let i = colStart; i <= colEnd; i++) {
        matrix[colStart][i] = counter;
        counter++;
    }
    rowStart++;
    for (let j = rowStart; j <= rowEnd; j++) {
        matrix[j][colEnd] = counter;
        counter++;

    }
    colEnd--;
    for (let k = colEnd; k >= colStart; k--) {
        matrix[rowEnd][k] = counter;
        counter++;
    }
    rowEnd--;
    for (let m = rowEnd; m >= rowStart; m--) {
        matrix[m][colStart] = counter;
        counter++;
    }
    colStart++;
}

for (let i = 0; i < size; i++) {
    console.log(matrix[i].join(' '));

}


