const mainArr = [1, 2, 3];

//1. Custom .forEach()
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

const myForEach = (mainArr, cb) => {
  for (let i = 0; i < mainArr.length; i++) {
    cb(mainArr[i], i, mainArr);
  }
};

console.log("foreach");
myForEach(mainArr, (num) => console.log(num * 2));
mainArr.myForEach((num) => console.log(num * 2));

//2. Custom .map()
const myMap = (mainArr, cb) => {
  const newArr = [];

  for (let i = 0; i < mainArr.length; i++) {
    newArr.push(cb(mainArr[i], i, mainArr));
  }

  return newArr;
};

// Array.prototype.myMap = function (cb) {
//   let mainArr = [];
//   let length = this.length;

//   for (let i = 0; i < length; i++) {
//     mainArr.push(cb(this[i]));
//   }

//   return mainArr;
// };

console.log("map");
console.log(myMap(mainArr, (num) => num * 2));
console.log(
  mainArr.myMap((num) => {
    return num * 2;
  })
);

//3. Custom .filter()
console.log(`filter`)
Array.prototype.myFilter = function (checkFn) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (checkFn(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

const myFilter = (mainArr, checkFn) => {
  let newArr = [];

  for (let i = 0; i < mainArr.length; i++) {
    if (checkFn(mainArr[i])) {
      newArr.push(mainArr[i]);
    }
  }

  return newArr;
};

console.log(mainArr.myFilter((num) => num % 2 === 0));
console.log(myFilter(mainArr, (num) => num % 2 === 0));

console.log(`all in one`)

// const people = [
//   {
//     name: "Bob",
//     city: "NYC",
//   },
//   {
//     name: "Ivan",
//     city: "Sofia",
//   },
//   {
//     name: "Alice",
//     city: "NYC",
//   },
//   {
//     name: "Gosho",
//     city: "Sofia",
//   },
// ];

// Array.prototype.myReduce = function (reducer, initVal) {
//   let acc = initVal !== undefined ? initVal : this[0];

//   for (let i = 0; i < this.length; i++) {
//     acc = reducer(acc, this[i]);
//   }

//   return acc;
// };

// mainArr.myReduce((acc, el) => acc + el, 0);

// const groupedByCity = people.myReduce((grouped, person) => {
//   if (!grouped[person.city]) grouped[person.city] = [];

//   grouped[person.city].push(person);

//   return grouped;
// }, {});

// console.log(groupedByCity);



mainArr
  .myMap((num) => num + 10)
  .myFilter((num) => num > 10)
  .myForEach((num) => console.log(num));
