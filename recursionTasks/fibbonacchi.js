let input = ["7"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const num = Number(gets());

const fibbonachi = (number, memorization = {}) => {
    if (number === 0) {
        return 0;
    }
    if (number === 1 || number === 2) {
        return 1;
    }
    if (number in memorization) {
        return memorization[number];
    }

    memorization[number] = fibbonachi(number - 1, memorization) + fibbonachi(number - 2, memorization);

    return memorization[number];
}

console.log(fibbonachi(num));
