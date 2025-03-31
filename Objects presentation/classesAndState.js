//Класовете най образно казано са шаблони по които обектите от дадения клас се създават.
//Класът е като чертеж за кола - той само описва какви характеристики и функции трябва да има една кола
//Обектите са конкретни коли, създадени по този чертеж. Всяка има свой модел, марка и може да изпълнява действия.

class Car {
    //State-а(състоянието) на един обект са данните в него , те могат да бъдат променяни във времето .
    //Field-овете(полетата) на един обект са различните променливи в него .
    //Методитe на един обект са функции които определят какви дейности може да извърши дадения обект
    //Поведението на един обект е начина по който той реагира и действа спрямо своето състояние.
    //Поведението не включва само методите ,но и промените в състоянието на обекта!
    brand;
    model;
    tractionControl = true;
    //turnOff и turnOn са методи защото променят данните в обекта !
    turnOffTraction() {
        this.tractionControl = false;
        console.log(`Traction control off!`);
    }
    turnOnTraction() {
        this.tractionControl = true;
        console.log(`Traction control on!`);
    }

    //checkTraction е проста функция която само дава информация , без да променя данните в обекта ! 
    checkTractionControl() {
        if (this.tractionControl) {
            console.log(`${this.model}'s traction control is on!`);
        } else {
            console.log(`${this.model}'s traction control is off!`);
        }
    }
}

//Създаване на първата кола

const firstCar = new Car();
firstCar.brand = 'BMW';
firstCar.model = 'E60';
console.log(firstCar);// ще покаже обекта със всички field-ове на създадения 
firstCar.checkTractionControl();// E60's traction control is on!
firstCar.turnOffTraction(); // Traction control off!
firstCar.checkTractionControl(); // E60's traction control is off!

//Създаване на втората кола

const secondCar = new Car();
secondCar.brand = 'Toyota';
secondCar.model = 'Corolla';
secondCar.checkTractionControl();// Corolla's traction control is on!

//Създаване на трета кола без подаване на параметри ! 
const thirdCar = new Car();
console.log(thirdCar); // Тук получаваме нов обект с всички полета (brand, model, tractionControl),
// но стойностите на brand и model са undefined, защото не сме задали стойности.
