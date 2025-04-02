let input = [`7`,
    `P4 P2 P3 S1 C2 P1 C1`];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const numOfSoldiers = Number(gets());

const soldiers = gets().split(' ');

const sergeant = [];
const corporal = [];
const private = [];

for (const type of soldiers) {
    if (type.startsWith('S')) sergeant.push(type);

    if (type.startsWith('C')) corporal.push(type);

    if (type.startsWith('P')) private.push(type);
}

console.log(...sergeant, ...corporal, ...private);