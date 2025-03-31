let input = ["2,20,11", 0];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const arr = gets().split(',').map(Number);

const index = Number(gets());
let isTrue = false;
let elevenCounter = 0;
let last;
let current;

const checkForSix = (arr, index) => {
    if (index >= arr.length) {
        return
    }

    current = arr[index];
    if (last * 10 === current) {
        isTrue = true;
    }
    last = current;
    checkForSix(arr, index + 1);
    return isTrue
}

console.log(checkForSix(arr, index));