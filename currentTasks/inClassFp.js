
// Let’s write a function that returns someone’s name.
const person = { name: 'Pesho' };
const getName = person => person.name
// console.log(getName);

// getName(person);
// 'Pesho'
// Let’s write a function that uppercase strings.

const uppercase = string => string.toUpperCase();
// uppercase('Pesho');
// 'Pesho'
// So if we wanted to get and capitalize person's name, we could do this:

const name = getName({ name: 'Pesho' });
// uppercase(name);
// 'PESHO'
// Let’s eliminate that intermediate variable name.

// uppercase(getName({ name: 'Pesho' }));
// And now what if we want to add a function that gets the first 3 characters of a string ?

const get3Characters = string => string.substring(0, 3);
// get3Characters('Pesho');
// 'Pes'
// Resulting in:

// get3Characters(uppercase(getName({ name: 'Pesho' })));
// PES
// Here comes the pipe.The function will combine all other functions in a single call so the code becomes much more readable and understandable and still does the same.Implement it.

const pipe = ((...fn) => nameObj => {
    let result = nameObj
    for (let func of fn) {
        result = func(result);
    }

    return result;


})(getName, uppercase, get3Characters)(person)

const pipeShort = (...fn) => (person) => (fn(person));
console.log(pipeShort(getName, uppercase, get3Characters)(person))

// const result = pipe(getName, uppercase, get3Characters)(person);
// console.log(pipe);
// let result2 = get3Characters(uppercase(getName(person)))
// console.log(result2);

// 'PES'