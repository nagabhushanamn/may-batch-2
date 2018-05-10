"use strict"

//-----------------------------------------------------
// obj-literal enhancements

// es5

// var name = "Nag";
// var age = 34;

// var dynamicField = "vacation"; // office | vacation

// let person1 = {
//     name: name,
//     age: age,
//     sayName: function () {
//         //......
//     },
//     'home-address': 'chennai'
// };

// // es6
// let person2 = {
//     name,
//     age,
//     sayName() {
//         //..
//     },
//     [dynamicField + "-address"]: 'chennai',
//     1: "one",
//     [1 + 1]: 'one plus one',
//     'say Name'() {
//         //...
//     }
// }

// person2['say Name']()

//-----------------------------------------------------

// destructuring

// Array
// -----------
// let nums = [1, 2, 3, 4, [5, 6]];

// let n1 = nums[0];
// let n2 = nums[1];

// or 

// let [n1, n2, n3 = 30, , [n5, n6]] = nums;

// let n1, n2;
// [n1, n2] = nums;

// Object
// ------------


// let person = { name: 'Nag', age: 34 }

// let myName = person.name;
// let myAge = person.age;

// or

// let { name: myName, age: myAge } = person;

// let { name: name, age: age } = person;
// or
// let { name, age } = person;

// let name;
// let age;

// ({ name, age } = person);

//-----------------------------------------------------

// spread operator

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// let nums = [10, 20, 30];
// // func(nums[0], nums[1], nums[2]);
// // or
// func(...nums);


// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];
// let newArr = [...arr1, 4, 5, 6, ...arr2];

//-----------------------------------------------------



// let getPrice = function () {
//     return 100 + 200;
// }

// Arrow function

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = (count) => {
//     return count * (100 + 200);
// }
// or
// let getPrice = count => {
//     return count * (100 + 200);
// }
// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }
// or
// let getPrice = (count, tax) => count * (100 + 200) + tax;

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = + tax
//     return total + cost;
// };

//-------------------------------------------

// where or why we need arrow-functions ?

/*

    - for compact function-arguments
    - to capture 'this'

*/

// - for compact function-arguments


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort(function (a, b) { return a - b; });
// // or
// nums.sort((a, b) => a - b);



//-------------------------------------------


// - to capture 'this'


// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }
//         console.log('teaching ends');
//         return askQues;
//     }
// };
// let askQues = trainer.doTeach();
// askQues.call(trainer, "Q1")

// let prevTrainer = { name: 'dilip' }
// askQues.call(prevTrainer, "Q2");




