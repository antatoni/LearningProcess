let input = ["126"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const arrOfNum = gets().split('').map(Number);

const sum = (num) => {
    if (num.length === 1) {
        return num[0];
    }
    current = num.pop();
    return current + sum(num);
}

console.log(sum(arrOfNum));