let input = ["88x1x8"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const stringArr = gets().split('');
let xCounter = 0;
let last;
const countX = (arr) => {
    if (arr.length === 0) {
        return;
    }
    last = arr.pop();
    if (last === 'x') {
        xCounter++;
    }
    countX(arr);
    return xCounter;

}
console.log(countX(stringArr));