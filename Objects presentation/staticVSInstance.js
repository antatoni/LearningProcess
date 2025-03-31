//Статичните данни в един клас са един вид неговите променливи , те важат директно в него , и могат да
//бъдат вкарвани във всички инстанции на дадения клас ако пожелаем.

class User {
    static userCount = 0;//добър пример е counter-a на потребители , тази стойност се вдига само когато конструктора направи нова инстанция 
    //и се достъпва използвайки името на класа

    constructor(name, age) {
        this.name = name;
        this.age = age;
        User.userCount++;
    }                                       //Статичните данни нямат достъп до this.

    birthday() {
        this.age++;
        console.log(`${this.name} is now ${this.age} years old!`)
    }
}

const user1 = new User('Alice', 25); //Създаване на инстанция на класът User 
const user2 = new User('Bob', 39); //Създаване на инстанция на класът User

user1.age = 19; // можем чрез създадената инстанция да променяме стойностите !

//Използване на методи на създадените горе инстанции !
user1.birthday(); // Alice is now 20 years old!
user2.birthday(); // Bob is now 40 years old!
console.log(User.userCount); // Проверяваме статичния UserCount колко голям е станал - 2 ;