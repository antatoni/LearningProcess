let input = ["28,1,45,255"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const originalArray = gets().split(',');
const copyOfOriginal = [...originalArray];
const modifiedArr = [];
for (let i = 0; i < copyOfOriginal.length; i++) {//making it binary nums;
    copyOfOriginal[i] = Number(copyOfOriginal[i]).toString(2);
}

for (let i = 0; i < copyOfOriginal.length; i++) {// padding with zeroes;
    if (copyOfOriginal[i].length < 8) {
        let filler = 8 - copyOfOriginal[i].length;
        let fillerArr = new Array(filler);
        fillerArr.fill('0');
        let element = copyOfOriginal[i];
        fillerArr.push(...element)
        fillerArr = fillerArr.join('');
        modifiedArr.push(fillerArr);



    } else {
        modifiedArr.push(copyOfOriginal[i]);

    }

}

// If the number is on odd position remove all the bits on odd positions and vice versa
// 28 is on even position = 0 0 0 1 1 1 0 0 = 0110
// 1 is on odd position = 0 0 0 0 0 0 0 1 = 0000
// 45 is on even position = 0 0 1 0 1 1 0 1 = 0011
// 255 is on odd position = 1 1 1 1 1 1 1 1 = 1111

for (let j = 0; j < originalArray.length; j++) {
    if (j % 2 === 0) {
        modifiedArr[j] = modifiedArr[j][1] + modifiedArr[j][3] + modifiedArr[j][5] + modifiedArr[j][7];
    } else {
        modifiedArr[j] = modifiedArr[j][0] + modifiedArr[j][2] + modifiedArr[j][4] + modifiedArr[j][6];
    }
}

console.log(modifiedArr.join(''));
