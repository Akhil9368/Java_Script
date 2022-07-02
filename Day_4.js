//Functions In Java Script

//function definitions,function statement consist of function keyword

// Before use the function we need to define the function

//so, function definition is
 
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

// syntax
//funtion parameter
function fun(a , b){
    // statement
    console.log(a+b);
}
// Function parameters
// Function Parameter are the names which is used at the time of function defining
// Function Argument are the names hich are used at the time of function calling

// function Argument
 fun(20,30);
// Ways To calling Functions

 // function Expression
 var funexp=fun(40,50)
 funexp;

 //using return

 function temp(a,b){
    return a+b;
 }
 var val = temp(30,50)
 console.log(val);

 // Anonamous Function

 var exp = function(a,b){
    return a+b;
 }
 console.log(exp(20,10));
