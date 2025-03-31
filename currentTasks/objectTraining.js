class Calculator {
    result = 0;

    static version = '1.0.0';
    static instanceCounter = 0;

    constructor(initialValue) {
        if (typeof initialValue !== "number") {
            throw new Error(`Value must be a number!`);
        }
        this.result = initialValue;
        Calculator.instanceCounter++;
    }

    static isNumber(value) {
        return typeof value === 'number';
    }

    add(value) {
        if (!Calculator.isNumber(value)) {
            throw new Error(`Please provide a valid number!`)
        }
        this.result += value;
    }

    subtrat(value) {
        if (!Calculator.isNumber(value)) {
            throw new Error(`Please provide a valid number!`)
        }
        this.result -= value;
    }
    multiply(value) {
        if (!Calculator.isNumber(value)) {
            throw new Error(`Please provide a valid number!`)
        }
        this.result *= value;
    }
    divide(value) {
        if (!Calculator.isNumber(value)) {
            throw new Error(`Please provide a valid number!`)
        }
        if (value === 0) {
            throw new Error(`Division by zero is not allowed!`);
        }
        this.result /= value;
    }

    getResult() {
        console.log(this.result);
    }

}

const calculator1 = new Calculator(15);
console.log(calculator1);
calculator1.add(10);
calculator1.add(100);
calculator1.multiply(2);
calculator1.divide(2);
calculator1.subtrat(13);
calculator1.getResult()

const calc2 = new Calculator(20);
console.log(Calculator.instanceCounter);

