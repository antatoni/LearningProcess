let input = ["@*@*@*xxx",
    "1 -1 1 -1 2 1 1 1 1 1 1"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const gameField = gets().split('');
const moves = gets().split(' ').map(num => Number(num));
let movesCounter = 0;
let eatenSouls = 0;
let eatenFood = 0;
let deadLocksEncountered = 0;
let index = 0;
let finished = false;

const updater = () => {
    const value = gameField[index];

    if (value === '@') {
        eatenSouls++;
        gameField[index] = 'empty';
    } else if (value === '*') {
        eatenFood++;
        gameField[index] = 'empty';
    } else if (value === 'x') {
        if (index % 2 === 0) {
            if (eatenSouls > 0) {
                eatenSouls--;
                deadLocksEncountered++;
                gameField[index] = '@';
            } else {
                finished = true;
                return;
            }
        } else {
            if (eatenFood > 0) {
                eatenFood--;
                deadLocksEncountered++;
                gameField[index] = '*';
            } else {
                finished = true;
                return;
            }
        }
    }
    movesCounter++;
};


if (gameField[0] === 'x') {
    finished = true;
} else {
    updater();
    for (let move of moves) {
        if (finished) {
            break;
        }
        index = ((index + move) % gameField.length + gameField.length) % gameField.length;

        updater();
    }

}

if (finished) {
    console.log(`You are deadlocked, you greedy kitty!`);
    console.log(`Jumps before deadlock: ${movesCounter}`)
} else {
    console.log(`Coder souls collected: ${eatenSouls}`);
    console.log(`Food collected: ${eatenFood}`);
    console.log(`Deadlocks: ${deadLocksEncountered}`);
}





