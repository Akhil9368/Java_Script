//String in javascript....
// String are written under the double quotes or single quotes...

// way-1
let str = "Akhil";
let str1 = 'Akhil';
// because it's created by the help of object
let str2 = new String("Akhil");
console.log(str + " " + typeof(str))
console.log(str1 + " " + typeof(str1))
console.log(str2+ " " +typeof(str2))

// to find the length of string we use length

console.log(str.length);
// escape character....
// There Are three ways to implements the quotes problem...
// if you want to add double quotes in the string 

 //      remember point --->if we use " "---> then inside this we use '' -->and we use ' ' ----> then use " "
let quotes = "My Name is 'Akhil Soni' ";
let quotes1= 'Hello its another way to write "Akhil" ';
console.log(quotes)
console.log(quotes1)

// and if both the places uses same type of comma

let quotes3="My Name is \"Akhil soni\" ";
console.log(quotes3);


//check the word present in the string 
// it's check from the starting
let str4 = "I this Universe you are the only who can this pull upward for their own growth"
console.log(str4.indexOf("this"));
// Lastindexof()----> backward search--->count number from last lastIndexOf("this",6);
// after the 6th index it's search the element
let str5 = "I this Universe you are the only who can this pull upward for their own growth"
console.log(str4.lastIndexOf("this"));

// search --->()
// we can not pass the double parameter like indexof
var temp = str5.search("this");
console.log(temp);

// slice(start,end)
// slice() extracted a part of a string and return the extracted part in new string...

// takes two paramater (start position is must) but if end index is entered it take one less..
const string = "Everone is fake just think about yourself..."
console.log(string.slice(4,string.length));

// goes to till end ofthe string and back to neg value
console.log(string.slice(4,-2));
console.log(string.slice(4));
// substring(start,end)
// substr(start,length)


// write only 250 characters inside the text area....display only 250 character.....
console.log(string.slice(0,15));
//substring method is similar to slice()---> but it cannot accept the negative index....
console.log(string.substring(0,10))
// but
console.log(string.substring(4,-3))

// Substr can also not accept the negative length.....
// but if we pass only one parameter and which is neg innumber so it return the data from at end...
// substr method id the old version of substring and slice()_
console.log(string.substr(3,5));




