let input = ["8818"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


const base = Number(gets());
const power = Number(gets());

const powerN = (base, power) => {
    if (power === 0) {
        return 1;
    }

    return base * (powerN(base, power - 1));
}
console.log(powerN(base, power));