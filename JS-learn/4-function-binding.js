"use strict"

// 'this' keyword


// // why we need 'this' keyword ?

// // let pName = "global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "local";
//         console.log('im ' + pName); // scope's hierachy data
//         console.log('im ' + person.pName); // reference var's obj's data
//         console.log('im ' + this.pName); // current context's owner data
//     }
// };
// person.sayName();
// let oldPerson = person;
// person = {
//     pName: 'ibm',
//     sayName: function () {
//         console.log('im ' + person.pName);
//     }
// }
// oldPerson.sayName();


//-------------------------------------------------------------
// function-binding
//-------------------------------------------------------------

// a. static function-binding
//-------------------------------------------------------------

// let p1 = {
//     name: 'Nag',
//     sayName: function () {
//         console.log('im ' + this.name);
//     }
// };

// let p2 = {
//     name: 'Ria',
//     sayName: function () {
//         console.log('im ' + this.name);
//     }
// };

// p1.sayName();
// p2.sayName();


// or

// function sayNameForAll() {
//     console.log('im ' + this.name);
// }

// let p1 = {
//     name: 'Nag',
//     sayName: sayNameForAll
// };

// let p2 = {
//     name: 'Ria',
//     sayName: sayNameForAll
// };

// sayNameForAll(); // im ??
// p1.sayName(); // im Nag
// p2.sayName(); // im Ria


//-------------------------------------------------------------

// b. dynamic function-binding

// let greetLib = {
//     name: 'greet-lib',
//     sayName: function (message, from) {
//         console.log(message + ' im ' + this.name + " : " + from);
//     }
// };

// let p = { name: 'Nag' };
// let e = { name: 'IBM' };

//way-1
// greetLib.sayName.call(p, "Hello", "chennai");
// greetLib.sayName.call(e, "dude", "bengalore");

//way-2:
// greetLib.sayName.apply(p, ["Hello", "chennai"]);
// greetLib.sayName.apply(e, ["dude", "bengalore"]);

//way-3:
// let personSayName = greetLib.sayName.bind(p, "hello", 'chennai');
// personSayName();
// personSayName();
// let empSayName = greetLib.sayName.bind(e);
// empSayName('hey', 'bengalore');
// empSayName('hi', 'pune');




//---------------------------------------------

// in .js , we can invoke functions in 3 ways

/*

    1. function-invocation 
        ==> in non strict-mode, this ==> window
        ==> strict-mode  , this ==> undefined
    2. method-invocation ( static-function-binding)
        ==> this ==> invoker-object
    3. call/apply/bind invocation ( dyanmic-function-binding)
        ==> this ==> arg-object

*/

//---------------------------------------------