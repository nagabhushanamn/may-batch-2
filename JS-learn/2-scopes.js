



/*


    scope / execution context
    -------------------------

    memory/stack-frame with given args & local variables
    to execute instructions

    phase-1 : creation / push
              => any variable declared with 'var' keyword, 
                 always get hoisted to top of that scope with default value ( undefined )
    phase-2 : execution / pop    
              => instructions will execute in seq.
              
    -------------------------------------------------------
    
    imp-note :

     ==> by default every-javascript runtime has one global-scope

     ==> every function-invocation alos created new-scope,
         which is child of in which scope that that function has created

    -------------------------------------------------------

*/

// -------------------------------------------------------
// var v = 12;
// console.log(v);
// -------------------------------------------------------

// var v = 12;
// function f1() {
//     console.log(v);
//     var v=13;
// }
// f1(); // f1-scope  <-- global-scope


// -------------------------------------------------------

// Quiz

// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2(); // f2-scope <- f1-scope
//     var v = 13;
// }
// f1(); // f1-scope  <- global-scope

// -------------------------------------------------------

// var v = 12;
// var v = 13;

// -------------------------------------------------------

// var v=100;
// if(true){
//     var v=200;
// }
// console.log(v);

// // -------------------------------------------------------

// problems with 'var' keyword
/*
    => variable always get hoist
    => we can re-declare same variable within scope
    = no block-scope to variable
*/

// soln : using 'let' & 'const' keywords ( from ES6 )  with block-scope

// // -------------------------------------------------------

// console.log(v);
// let v=12;

// // -------------------------------------------------------

// let v=12;
// let v=13;
// -------------------------------------------------------

// var v = 100;
// if (true) {
//     let v = 200;
// }
// console.log(v);

// -------------------------------------------------------


// const name = "Nag";

// const person = {
//     name: 'Nag',
//     age: 33
// };

// person.age=34;


// -------------------------------------------------------

/*

    use 'let' ==> for mutable reference
    use 'const' ==> for immutable reference

    avoid 'var' keyword

*/