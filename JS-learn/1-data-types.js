

/*

    data-types
    ------------
    1. primitive / simple-type  ==> values
    2. reference / complex-type ==> objects

*/

//----------------------------------------------------
// 1. primitive / simple-type  ==> values
//----------------------------------------------------

// a. String

var name = "Nag";
var selection = 'abc';
// var dynamicString = 'the trainer is ' + name;
// or
// in ES6
var dynamicString = `the trainer is ${'Mr.' + name}` // string interpolation
var multiLineString = `
    <div>
        <h1> ${name} </h1>
    </div>
`;

//----------------------------------------------------

// b. Number

var count = 12;
var cost = 12.12;

//----------------------------------------------------

// c. boolean

var found = true;

// imp-note :

/*
    falsy values  ==> false,0,"",null,undefined,NAN

    ref : https://dorey.github.io/JavaScript-Equality-Table/
*/

//----------------------------------------------------

// d. undefined

var v;



//----------------------------------------------------
// 2. reference / complex-type  ==> objects
//----------------------------------------------------


// how to create object ?

/*
    var ref=new Constructor();
*/

/*
imp-note:
by default , all javascript objects are extensible & configurable
*/

// var config = new Object();
// config.url = "htpp://";
// config.httpMethod = "GET";
// config.onSuccess = function () {
//     console.log('im ruunning on success');
// };
// delete config.httpMethod;

//----------------------------------------------------
// Literal-style objects
//----------------------------------------------------
// a. Object
var config = new Object(); // object wrapper
config.url = "htpp://";
config.httpMethod = "GET";
config.onSuccess = function () {
    console.log('im ruunning on success');
};
// or ( literal style)
var newConfig = {
    url: 'http://',
    httpMethod: 'GET',
    onSuccess: function () {
        //..
    }
}
//----------------------------------------------------
// b.  Array / List

//
var menu = new Array();
menu[0] = "biryani-1"
menu.push("biryani-2");

// or

var newMenu = ["biryani-1", "biryani-2"];

//----------------------------------------------------

// c. RegExp

var adharPattern = new RegExp('\\d{4}-\\d{4}-\\d{4}');

// or

var newAdharPattern = /\d{4}-\d{4}-\d{4}/;


//----------------------------------------------------

// d. Function

var add = new Function("n1", "n2", "var r=n1+n2;return r;");

// or

function add(n1, n2) {
    var r = n1 + n2; return r;
}

//----------------------------------------------------

// How to access obj's propertis?

var person = {
    name: 'Nag',
    age: 33,
    'home-address': 'chennai'
};

person.name = "Nag N";
console.log(person.name);

person['home-address'] = "bengalore";