// what is array
//ArrArrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays. Arrays use numbers to access its "elements".ays in javascript
//

//What is Associative Array

// Associative arrays are basically objects in JavaScript where indexes are replaced by user defined keys. They do not have a length property like normal array and cannot be traversed using normal for loop.

// in javascript we can store anydata typevalue

// Ways to intialize
//way-1
var sun = new Array
sun=[10,20,30,40,50]
// way-2
var  myFriends = ['Akhil','Soni','Bareilly','dehradun','uttarpradesh','Bareilly','uttrakhand',10,14,true];
for(let i=0;i<myFriends.length;i++){
    console.log(myFriends[i]);
}
// For in loop-- for of loop
//this loop is print the index number
for(let element in myFriends){
console.log(element)
}
// for -of loop 

for (const iterator of myFriends) {
    console.log(iterator);
}

//for-each-loop
// callback funcioms
console.log("***********")
myFriends.forEach(function(element,index,array) {
    console.log(`${element} of index ${index}`);
});


// Searching and filter in Arrays

// To find out the index of searching element

//if found the element return the index else return -1
console.log(myFriends.indexOf('bareilly'));
// return the index of element Bareilly   and always use forward search
console.log(myFriends.indexOf('Bareilly'));

console.log(myFriends.lastIndexOf('Bareilly'));
console.log(myFriends.indexOf('Bareilly'));
console.log(myFriends.lastIndexOf('Bareilly',4))

console.log(myFriends.includes('Bareilly',6));


// filteration in Array
// it's also a callback function ----->Search With Filteration  and return only one elements that satisfied the first time
// 1.find()
var myvalue =[50,20,202,10,30,40,60,70,80];
let ex = myvalue.find((currVal)=>{
      return currVal<40;
});


// same thing can be done in just one Line

console.log(myvalue.find((currVal)=>currVal<40));


// FindIndex()   return only first one that satisfied the first index 
// if not satisfied then it will give -1 but find() return undefined

console.log(myvalue.findIndex((curreVal) => curreVal>100));


// Filter():---return all the satisfying method -----1-map()

// filter methods return the array   if not matched with any conditions return empty array
const my = myvalue.filter((currVal)=>currVal>100);
console.log(my);


// How to sort an array in javascript
// But it sort only the data on seeing the first no like 20,30,303,202  o/p:- 20,202,30,303/
// but it works perfectly on string
console.log(myvalue.sort());
// beacsue of this it gives incorrect result when we apply on numbers.



