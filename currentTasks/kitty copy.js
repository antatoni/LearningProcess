let input = ["@*@*@*xxx",
    "1 -1 1 -1 2 1 1 1 1 1 1"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const valuesArray = gets().split('');
const pathArray = gets().split(' ').map(Number);

let index = 0;
let foodCollected = 0;
let soulsCollected = 0;
let deadlocks = 0;
let jumps = 0;
let isFinished = false;

const updateValues = () => {
    const value = valuesArray[index];

    if (value === '@') {
        soulsCollected++;
        valuesArray[index] = '-';
    } else if (value === '*') {
        foodCollected++;
        valuesArray[index] = '-';
    } else if (value === 'x') {
        if (index % 2 === 0) {
            if (soulsCollected > 0) {
                soulsCollected--;
                deadlocks++;
                valuesArray[index] = '@';
            } else {
                isFinished = true;
                return;
            }
        } else {
            if (foodCollected > 0) {
                foodCollected--;
                deadlocks++;
                valuesArray[index] = '*';
            } else {
                isFinished = true;
                return;
            }
        }
    }
    jumps++;
};

if (valuesArray[0] === 'x') {
    isFinished = true;
} else {
    updateValues();

    for (let move of pathArray) {
        if (isFinished) break;

        index = ((index + move) % valuesArray.length + valuesArray.length) % valuesArray.length;

        updateValues();
    }
}

if (isFinished) {
    print('You are deadlocked, you greedy kitty!');
    print(`Jumps before deadlock: ${jumps}`);
} else {
    print(`Coder souls collected: ${soulsCollected}`);
    print(`Food collected: ${foodCollected}`);
    print(`Deadlocks: ${deadlocks}`);
}