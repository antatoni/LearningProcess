// Задача 3: Създай клас `Animal` и подклас `Dog`, който override-ва метод `makeSound()`.  
class Animal {
    #name;
    #age;
    static MAX_NAME_LENGTH = 20;
    static MIN_NAME_LENGTH = 2;
    static MAX_AGE = 115;
    static MIN_AGE = 1;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set name(value) {
        if (!value) {
            throw new Error(`Can't have an empty name!`);
        }
        if (value.length > Animal.MAX_NAME_LENGTH || value.length < Animal.MIN_NAME_LENGTH) {
            throw new Error(`Invalid length name!`);
        }
        this.#name = value;
    }
    get name() {
        return this.#name;
    }
    set age(value) {
        if (!value) {
            throw new Error(`Can't have no age!`);
        }
        if (typeof value !== 'number') {
            throw new Error(`Age must be a number!`);
        }
        if (value < Animal.MIN_AGE || value > Animal.MAX_AGE) {
            throw new Error(`Invalid age!`);
        }
        this.#age = value;
    }
    get age() {
        return this.#age;
    }

    makeSound() {
        console.log(`some sound`);
    }
}

const animal = new Animal('Joe', 13);
animal.makeSound();



class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    makeSound() {
        console.log(`Woof woof!`);
    }

}

const doggy = new Dog('Rex', 8);
doggy.makeSound();