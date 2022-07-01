
console.log(NaN === NaN)
// false
console.log(Number.NaN ==NaN);
//false
//An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers
console.log(isNaN(NaN));
//true
console.log(Number.NaN);
//NaN
//Numbes :-An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers

//NaN:-A value that is not a number. In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
console.log(Number.isNaN(NaN));
//true

console.log(Number.isNaN(23));
//false



//Expressions and Operators

//Arithmethic opereator + - / * %

//What is expression : The combination of operands and opereator(z=x+y);

var x =10;
//Java script is a loosely typed language so we can change the value without var/let/const
x=20;
y=22;
a =x+y
console.log(a);
b=x*y;
console.log(b);
c=x/y;
console.log(c);
d=x%y;
console.log(d);
e = y-x
console.log(e);


//Assignment Opereator
x=10
y=10;
console.log("These two values are not equal "+x==y);
//false :- due to concatenation issue
//  if we write simply
console.log(x==y);
// true
// Ecma 2015
console.log(`These two Numbers are equals : ${x==y}`);

// Increment And Decrement Opereator
z= 10;
//Post Increment
var c=z++;
console.log(c);
k=15;
var c =++z;
console.log(c);
// post decrement
d =7;
// value of c =7
var c = d--;
console.log(c);
//value of c=6;
var f =--d;
//value of c= 5
console.log(f);

// Comparison Opereator

var x= 10;
vary= 20;
//Equal to opereator
if(x==y){
    console.log("yes it's same True")
}
var x= 10;
vary= 20;
// Greater Than Opereator
if(x>y){
    console.log("Hey I'm elder")
}
var x= 10;
vary= 20;
//Less than Opereator
if(x<y){
    console.log("Hey I'm Younger")
}
var x= 10;
vary= 20;
if(x != y)
{
    console.log("yes these two are not same");
}

// Logical Opereator
//   &&,||,! --> Always gives a boolean value

//use to concatenate two string
// Strimg Concatenatio +  "Akhil " + "Soni"----->Akhil Soni


// Ternary Opereator

var a =10;
c= a>10 ?console.log("Yes true"):console.log("No it's false");

