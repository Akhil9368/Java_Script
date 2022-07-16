// Replace() ---->Replace method replace the specified value with another value in a string.
// Always Traverse from the starting index of the array--only one time work
// Replace method is case sensitive.
let myValue = "My name is Akhil Soni and i'm final Year Student....";
let value =myValue.replace("name","Name");
console.log(value);
// If no String is matched then return the original string....
let temp = myValue.replace("my","b");
console.log(temp);

// return the Unicode of Character in a string
// with the help of CharCodeAt---->just like a Ascii value...UTF-8 --->  0-65535

var name1 = "Akhil";
console.log(name1.charCodeAt("A"));

// property access ---it'similar to array in integer.

var temp3 = "Hello World";
// property Access....
console.log(temp3[0]);


// Conversion of upperCase and Lowercase

var str = "My Name is Akhil Soni and I am Final year Btech Student....."
console.log(str.toLowerCase());
console.log(str.toUpperCase());



var val ="            hello       ";
console.log(val)
console.log(val.trim());

// Convert String into array....
//split can be with various ways....." ", " ,"...etc
var vl = "Arrays Converted into String";
console.log(vl.split(" "))


// Date and Time Object....date object conatins a Number that represent milliseconds since i january 1970 UTC
// 1.Date Method(get and set )
// there are four ways to create a new date object
// 1--> new date constructor

let date = new Date();// By this method date accratively but time is giving wrong
console.log(date);

// 2.console.log(new Date().toLocalString)
console.log(new Date().toLocaleString());//Accurate date and time in IST
console.log(new Date().toString());// String format

console.log(Date.now());// return the time in milli-seconds from 1 January 1970
// month count from 0 to 11
//miniumum 2 arguments required
var time = new Date(2021,0,5);
// but in Additional it gives time also
console.log(time.toLocaleString());

let val10 = new Date("October 10,2021 10:10:00");
//o/p:- 10/10/2021, 10:10:00 AM
console.log(val10.toLocaleString());

let da = new Date();
console.log(da.getDate())
console.log(da.getDay())
console.log(da.getFullYear())
console.log(da.getHours())
console.log(da.getMilliseconds().toLocaleString()) // the millisecond of the date between 0 -999



