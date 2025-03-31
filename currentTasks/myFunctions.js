//for each , filter , map , use all to map+ 10 , to filter all< 10 , and to log all result's
const mainArr = [1, 2, 3];

const myForEach = function (arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}



const myFilter = function (arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i], i, arr);
        }
    }

    return newArr;
}

const myMap = (mainArr, cb) => {
    const newArr = [];

    for (let i = 0; i < mainArr.length; i++) {
        newArr.push(cb(mainArr[i], i, mainArr));
    }

    return newArr;
};

mainArr
    .myMap((num) => num + 10)
//     .myFilter((num) => num > 10)
//     .myForEach((num) => console.log(num))


console.log(myMap(mainArr, num => num + 10))