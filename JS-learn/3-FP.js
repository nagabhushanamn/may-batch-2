

/*
 how to create function in .js-lang ?

 3 - ways :
   
    way-1 : function-declaration

        ==> Named function
        ==> function-obj created at scope-creation phase
        ==> always get hoist with function-obj

    way-2 : function-expression

        ==> Anonymous function
        ==> function-obj created at scope-execution phase
        ==> we can invoke only after expression

    way-3 : arrow-function ( Es6 )

*/

//---------------------------------------------------
// way-1 : function-declaration

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));


//---------------------------------------------------
// way-2 : function-expression

// console.log(add(12, 13)); // Error

// var add = function (n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//---------------------------------------------------


// FP principles


/*

    Functions as Values

        - store function in variables
        - pass function in parameter
        - return function from other function

*/

//---------------------------------------------------

// - store function in variables

// function greet() {
//   console.log('hello...');
// }

// let sayHello = greet;
// sayHello();  

//---------------------------------------------------

//  - pass function in parameter


// function greet(f) {
//     if (f) {
//         f(); return;
//     }
//     console.log('Hello...');
// }

// greet();
// greet(function () { console.log('Namaskara..') });


// e.g

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort();
// nums.sort(function (a, b) { return a - b; });
// console.log(nums);

//---------------------------------------------------

// - return function from other function


// function teach() {
//     console.log('teaching.....');
//     let learn = function () {
//         console.log('learning...');
//     }
//     //learn();
//     return learn;
// }

// let learnFunc = teach();
// learnFunc();
// learnFunc();


//---------------------------------------------------


// 

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[2])
// }

// func(1, 2, 3);

//---------------------------------------------------

// e.g

// function sum() {
//     let r = 0,
//         len = arguments.length,
//         i = 0;
//     while (i < len) {
//         r += arguments[i];
//         i++;
//     }
//     return r;
// }

//---------------------------------------------------

// function getFood() {
//     return "No Food";
// }
// function getFood(pay) {
//     if (arguments.length === 0) return "No Food"
//     return "Biryani";
// }

// console.log(getFood());

//---------------------------------------------------

// // es6 = function with default params

// function func(a = 1, b = 2) {
//     // if (!a) a = 1;
//     // if (!b) b = 2;
//     // or
//     // a = a || 1;
//     // b = b || 2;
//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);

//---------------------------------------------------

// es6 : function with rest params

// function func(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// func(1, 2, 3, 4, 5, 6);