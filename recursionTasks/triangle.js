let input = [4];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const num = Number(gets());
const triangle = (number) => {
    if (number === 1) {
        return 1;
    }
    if (number === 0) {
        return 0;
    }

    return number + triangle(number - 1);

}

console.log(triangle(num));