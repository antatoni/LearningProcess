//По принцип е добра практика да се използва не вградения конструктор , 
// а направен от нас , защото така улесняваме подаването на данни!

class Car {
    brand;
    model;
    tractionControl = true;
    //Правейки конструктор не е нужно ние правейки инстанцията на обект , след това да задаваме всеки един field по отделно,
    //а ги подаваме директно във скобите на новата инстанция :new Car('BMW', 'E60') !
    constructor(brand = 'Mercedes', model = 'W211') {//също така ако искаме създадените обекти да имат някаква 
        this.brand = brand;                     //Default стойност може да го зададем директно в конструктора ! 
        this.model = model;
    }
    turnOffTraction() {
        this.tractionControl = false;
        console.log(`Traction control off!`);
    }
    turnOnTraction() {
        this.tractionControl = true;
        console.log(`Traction control on!`);
    }

    checkTractionControl() {
        if (this.tractionControl) {
            console.log(`${this.model}'s traction control is on!`);
        } else {
            console.log(`${this.model}'s traction control is off!`);
        }
    }
}


const firstCar = new Car('BMW', 'E60');
console.log(firstCar); // обекта със стойности brand:'BMW' , model:'E60' , tractionControl:true;
const secondCar = new Car();// тук ще се използват Default стойностите на конструктора ! 
console.log(secondCar);