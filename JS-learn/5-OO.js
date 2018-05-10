

// ES5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// Es6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor()');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::constructor()');
    }
    saySalary() {
        console.log('im get ' + this.salary + " only");
    }
    askForBonus() {
        return this.salary * 0.02;
    }
}

class Boss extends Employee {
    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();
    }
}

var b = new Boss('Nag', 34, 1000);



class Abc {
    static staMethod() {
        //....
    }
}
Abc.staVar = 123;