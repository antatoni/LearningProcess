let input = [];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const num = Number(gets());
const factorial = (number) => {
    if (number === 1 || number === 0) {
        return 1;
    }
    return number * factorial(number - 1);

}

console.log(factorial(num));