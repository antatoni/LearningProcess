let input = [3];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const numOfBunny = Number(gets());
let ears = 0;
const earCounter = (bunnys) => {
    if (bunnys === 0) {
        return 0;
    }
    if (bunnys % 2 === 0) {
        ears += 3;
    } else {
        ears += 2;
    }

    earCounter(bunnys - 1);
    return ears
}

console.log(earCounter(numOfBunny));