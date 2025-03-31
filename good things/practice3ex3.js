let input = ['0',
    '10,20,30,40,50',
    '2 forward 1',
    '2 backwards 7',
    '3 forward 2',
    '3 backwards 2',
    'exit'
];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

let index = Number(gets());
let arr = gets().split(',').map(num => Number(num));

let forwardTotal = 0;
let backwardTotal = 0;
let commandArr = gets().split(' ');
let exit = false;

while (!exit) {
    let steps = Number(commandArr[0]);
    let stepSize = Number(commandArr[2]);
    let command = commandArr[1];
    if (command === 'forward') {
        if (index > arr.length) {
            index = index - arr.length;
        }
        for (let i = 0; i < steps; i++) {
            let forwardIndex = index + stepSize;
            if (forwardIndex > arr.length - 1) {
                while (forwardIndex > arr.length - 1) {
                    forwardIndex = forwardIndex - arr.length;
                    index = forwardIndex - stepSize;
                }
            }
            forwardTotal += Number(arr[forwardIndex]);
            index += stepSize;
        }
    } else if (command === 'backwards') {
        if (index < 0) {
            index = arr.length + index;
        }
        for (let i = steps - 1; i >= 0; i--) {
            let backwardIndex = index - stepSize;
            if (backwardIndex < 0) {
                while (backwardIndex < 0) {
                    backwardIndex = backwardIndex + arr.length;
                    index = backwardIndex + stepSize;
                }
            }
            backwardTotal += Number(arr[backwardIndex])
            index -= stepSize;
        }
    }
    commandArr = gets().split(' ');
    if (commandArr.join() === 'exit') {
        exit = true;
    }
}

console.log(`Forward: ${forwardTotal}`);
console.log(`Backwards: ${backwardTotal}`);




