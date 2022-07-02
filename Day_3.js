// Challenge Time
// It's denoate the power of a^b;
console.log(3**3);
console.log(10**-1);

// Swap Two Varible
var a=10;
var b= 20;

// Aproach -1

var temp =a;
a=b;
b=temp;
console.log(a);
console.log(b);
// Appraoch-2
console.log("***************");
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);
console.log("*******************");
//Approach -3
a=a*b;
b=a/b;
a=a/b;
console.log(a);
console.log(b);

// What is the diff between == and ===

var a=6;
var c ='6';
var d ="6";
// Double equal to check only the values
console.log(a==b)
console.log(a==c)
console.log(b==c)
// triple equal check valeand data type both


//Control loops

//do-while(), while(),for(),foreach,for-in,for-of

// Write a program to check leap year or not
//Approach -1
var a =2050;
if(a%4==0 || (a%400==0 && a%100)){
    console.log("Leap year")
}
else
console.log("Not a Leap Year");


// Approach -2
var c = 2020;
if(a%4===0){
   if(a%100==0){
      if(a%400==0){
       console.log(" Leap Year");
      }
      else
       console.log("Not a leap year");
   }
   else
      console.log("Leap Year")
}
else
console.log("Not a Leap Year")


//what is truty and false in javascript

// There are total 5 falsy method
// 0,undefined,null,false,Nan


// In java script there is one good feature
// means at the time of checking you can assign the value;
if(a=10){
    // here the value of a =10
    console.log(a);
}

if(score =0){
    // score is zero that means no value is zero
    console.log("Ohh shit You loose the game");
}
else
    console.log("Oh You won the match");



// Switch Case

var area ="circle";
switch(area){
    case 'circle': 
           var a = 4;
           d= 3.14*a*a;
           console.log(`The area of circle is ${d}`);
           break;
    case 'triangle': 
           var a = 5;
           d= a*a;
           console.log(`The area of Square is ${d}`);
           break;
    default:
        console.log("Choose correct Options");

}


// difference between while loop and do while loop

//while loop first check the condition and next to the inside the loop
//but do while loop firstgo inside the loop and then check the conditions
// example amazon website gfg ....etc

// print number from 1 to 10
a=1;
while(a<=10)
{
    console.log(a);
    a++;
}

console.log("**********");
a=1;
do{
    console.log(a)
    a++;
}while(a<=10)

console.log("***********");
// for loop 

// for(intializer;conditions;iteration)

for(var i=1;i<=10;i++){
    console.log(i);
}


console.log("**********");
console.log("The Table of 2 is :")
var a=8 ;
for(var i=1;i<=10;i++){
    console.log(`${a} * ${1} = ${a*i}`);
}
