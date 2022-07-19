// date set
var date  = new Date();
console.log(date.setFullYear(2022));
// return the millisecond since 1 jan 1970 to till set year
console.log(date.setDate(5).toLocaleString());

// Time Methods
// It Also gives the resultin milli seconds
console.log(date.getTime());
// get Hours in 24 hr format
console.log(date.getHours());
// similarly Set Time.....same as set date

// Set date and set Time gives the result in millisecond format....but in browser it gives nprmal formatdata





// Math object in js
console.log(Math.PI);
// Find the Sqrt 
console.log(Math.sqrt(25));
console.log(Math.sqrt(88));
// remove negative and give the positive value.... 
console.log(Math.abs(-1));
// Always give the value in the range of 0-1
console.log(Math.random());
// Round the number if decimal is less than .5 then it gives only the original part
console.log(Math.round(2.599));
console.log(Math.round(3.4999));
//Always gives one more the it's percison value...
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.5));
// Just Opposite of ceil
console.log(Math.floor(4.9));
console.log(Math.floor(4.4));

// remove Duplicate
var temp =[10,20,20,20,10,30,40,06,30];
console.log(...new Set(temp));

// trunctate the decimals
console.log(Math.trunc(44.47));

// Note point :-
// if number is positive then trunc is same as floor  and number is neg then it behave as ceil;
