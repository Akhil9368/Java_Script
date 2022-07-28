//Array DeStructuring.......

let myArray = ["Akhil",190102100,115000];
let firstname = myArray[0];
let myRoll = myArray[1];
let fees = myArray[2];
// for Preventing the individual data;
console.log("My First name is " + firstname );

//Array deStruturing 
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//Position matters alot
let [a,b,rest] = [10,20,30,50,60,70,80,90];
console.log(a);
console.log(b);
console.log(rest);
//New Section
let [c,d , e="Akhil"] = [10,20];
console.log(c)
console.log(d)
console.log(e)

// Object DeStructuring
// same as Array Distrutrng .....diff is currly bracket
const myName = {
    myFname: 'Akhil',
    mylast: "Soni",
    myAge : 1010

}
let{myFname,mylast,myAge}= myName;
console.log(mylast);

// Object Properties.....
// Ecma 2016
var myName1 = "Akhil"
const val ={
    [myName1]: " Hii How Are You...",
    [20+6]: "Boss"

}
console.log(val)

// Spread operator
// suppose 
var color =['red','green','blue','yellow'];

// now you want to add array data into another array by the help of spread opereator
var mycolors = [...color,'sky blue','brown'];
console.log(mycolors)
// ecs7
// 1.includes
// 2.exponential **

