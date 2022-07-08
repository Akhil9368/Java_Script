// ECMA Script

// 1996 is developed javascript,1997 ECMA international 
// 2015 ecma script first version es6 Ecmascript 2015 is known as es6
//es7 2016
//es8 2017
//es9 2019
//es10 2020


// new Fearture  let/const   ---- temple string ----arrow function


// diff between let const and var 

// var ---- function block
// let/const ---- block scope  but we can not remodify the value of const variable

let akh = "Akhil"
console.log(akh)
const akhi="Akhil"
console.log(akhi)
var ak ="Akhil"
console.log(akh)

// template litereals
var table=2;
for(let i=1;i<=10;i++){

    // string litereals // template litreals
    console.log(`${table} * ${i}  ${table*i}`);
}


function multiply(a,b){
    // Gives NAN
   console.log(a*b);

}
multiply(4);

// for this type of problem we have default parameter

function mul (a,b=10){
    console.log(a*b);
}
// 4 is point to variable a means always point to first parameter of the function
mul(4);


// Arrow  function

// Normal Function
// in normal fnction we can print the data before thefunction or after the function name
console.log(fun(5,6));
function fun(a,b){
    return `the sum two number is ${a+b}`;
}
console.log(fun(3,5));


// Arrow function
// In this way we always print the data after the function name
// if the code is only 1 line then there is no need to write return keyword and paranthesis
const funo = (a,b) =>`the sum of two number is ${a+b}`;
// Beacuse of the code is more than one line so we need have to write return as well as paranthesis {}
const val =() =>{
    let a =10,b=20;
    sum= a+b;
    // template litreals 
    return `the sumof two number is ${sum}`
}
console.log(funo(4,5))
console.log(val());
   



