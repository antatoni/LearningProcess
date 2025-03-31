let input = ["8818"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const arrOfNum = gets().split('').map(Number);
let counter = 0;
let last;
const occurances = (num) => {
    if (num.length === 0) {
        return
    }
    current = num.pop();
    if (current === 8) {
        if (last === 8) {
            counter += 2;
        } else {
            counter++;
        }
    }
    last = current;
    occurances(arrOfNum);
    return counter;
}

console.log(occurances(arrOfNum));