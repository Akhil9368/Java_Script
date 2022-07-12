// Crud Opereations In javaScript;

// push(),pop()
const animal =['dog','cat','rat','cow','chicken'];
const val =animal.push('timmi');
// by the help of push method we can add data at the end of the array
// it Returns the Array length ----> val give the length of array
console.log(animal)
console.log(val);

// if you want to add dat at the begening of array
// unsift()
animal.unshift('horse');
console.log(animal);
// similarly it also gives the length of array  console.log(console.log(animal)) return the length of array

// you can also add one or moe than one data inside the inside push or unshift method


// remove the data from last -----> pop() remove the data from starting----->shift()


// all in one method ----> Splice();  CRUD    --->Starting number ---->Delete countnumber : string

var name1= ["Akhil","Nikhil","Kanak","Saumya","Bhabhi"];
//Add Data At Any indexes
name1.splice(3,0,"sisu");
// (add element at last --->Array.length)
// Add element at index 3 and move elements to next indexes;
console.log(name1);


// return value of splice method ---->empty array(deleted array)
name1.splice(4,1)
// delete elements
console.log(name1.splice(4,1))
console.log(name1);

// for update first delete and then add

var sisi = name1.splice(0,1,"akhil");

console.log(name1);
console.log(sisi);

// if you want to update the element  --->first check it's include or not and get the index of that value

var inde = name1.includes("akhil")
console.log(inde)

var indexat = name1.indexOf("akhil");
if(indexat>-1){
name1.splice(indexat,1,"Akhil");
}
else{
    console.log("No Such Element found in the array")
}
console.log(name1);


// if you want to delete all the data after Akhil

name1.splice(indexat,Infinity);
//Akhil At index 0 after zero remove all the elements
console.log(name1);

