let input = ['2 1'];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


let [startingNum, steps] = gets().split(' ').map(Number);
let firstStep = startingNum;
let currentResult = startingNum;
let isTrue = true;
let parentsQueue = [startingNum];
steps--;


while (isTrue) {
    if (steps === 0) {
        break;
    }
    let lastParent;
    currentResult = 0;

    for (let i = 0; i < 3; i++) {
        if (steps === 0) {
            isTrue = false;
            break;
        } steps--;

        if (i === 0) {

            lastParent = parentsQueue.pop();
            currentResult = lastParent + 1;
            parentsQueue.unshift(currentResult);


        } else if (i === 1) {

            currentResult = (lastParent * 2) + 1;
            parentsQueue.unshift(currentResult);


        } else {

            currentResult = lastParent + 2;
            parentsQueue.unshift(currentResult);


        }
    }

}



console.log(currentResult);

