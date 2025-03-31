const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

console.log(arr.reverse());

const copyArr = arr.map(Number);
console.log(copyArr);
console.log(arr.includes(10));
console.log(arr.find((element) => element > 6));
let noDuplicates = [];
arr.forEach(elemenet => {
    if (!noDuplicates.includes(elemenet)) {
        noDuplicates.push(elemenet)
    }
})
console.log(noDuplicates.sort((a, b) => a - b));

let multi = [1, 2, [3, 4, [5, 6]]];
console.log(multi.flat(2))

// const arr = [1, 2, 1, 4, 2, 3, 3, 3, 3, 5, 6, 7, 3, 2];
arr.sort();
let currCount = 0;
let biggestCount = 0;
let most = 0;
console.log(arr);



for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (current === arr[i - 1]) {
        currCount++;
        if (currCount >= biggestCount) {
            most = arr[i];
            biggestCount = currCount;
        }

    } else {
        currCount = 0;
    }

}
console.log(most);
