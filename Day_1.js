//What is JavaScript
// javascript improves the user experince of the web page by converting it from static page to interactive page, javascript is textbased (Functional) programing language used both client side and server side.


// Values And variables
//you can use single quotes /double quotes 
var myName = "Akhil Soni"
console.log(myName);

var myAge = 19;
console.log(myAge);

var mySalary = 100001.10;
console.log(mySalary);
// Some valid variable Name
var _myAge = 30;
var $myAge = 20;
var _2Age = 10;
var bool = true;
var myValue;
var null_Val = null;
console.log(_myAge);
console.log($myAge);
console.log(_2Age);

// Naming Conventions 
// The First Letter Must be UnderScore or letter and Dollar $ and rest of letter can be anything
// variable name are Case Sensitive
// You Can't use js reserved keyword


//Primitive datatype 
// Undefined
// boolean
// Number
// String
//BigInt
//Symbol


// We Can check the datatype using typeof method
console.log("**************");
console.log(bool ,typeof(bool));
console.log(myName ,typeof(myName));
console.log(myAge ,typeof(myAge));
console.log(mySalary ,typeof(mySalary));
console.log(myValue ,typeof(myValue));
console.log(null_Val ,typeof(null_Val));


console.log("**************************");

// NAN = Not A NUMBER
console.log(10 + "20");
console.log(10 - "20");
console.log("Java" + "Script");
console.log(" " + " ");
console.log(" " +"0");
console.log("Java" - "Script");


console.log("***********************")


//First Interview Question 
// diff between undefined and null

// ex  undefined
var temp=['a','b','c'];
if(temp[3] === undefined)
console.log("true");
else
console.log("false");

// ex null
// check the data inside the isNan Method is Number or not
console.log(isNaN("hello"));

console.log("***************")

// What is NAN?

//NAN is the property of global object and we can say it's a variable for global Scope In JavaScript, NaN is short for "Not-a-Number".

//In JavaScript, NaN is a number that is not a legal number.

//The Number.isNaN() method returns true if the value is NaN, and the type is a Number.

// ex

console.log("Akhil" - "Soni");

// check the Phone is Valid or not 
var my_Number = 9876543210;
console.log(isNaN(my_Number));