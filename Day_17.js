//oopsin javascript

//what is object Litereals? 
// object literals is just a ke value pair in data struture (like hashmap)
// similarly storig value and functions in one container


// there are Two Ways to create Object Litereals
//1 way
//Object Litereals
const myname  = {
    myRealname :"Akhil Soni",
    myRealvalue : "10",

    // myfun : function () {
    //     console.log(`my name is ${myname.myRealname} and age is ${myname.myRealvalue}`);
    // }
    myfun (){
        console.log(`my name is ${myname.myRealname} and age is ${myname.myRealvalue}`);
    }
}


myname.myfun();

//if we want object as a value inside a object
const myname1  = {
    // Another Object inside the oobject 
    myRealname: {
          firstname : "Akhil ",
          LastName : "Soni"
    },
    myRealvalue : "10",
    myfun (){
        console.log(`my name is ${myname.myRealname} and age is ${myname.myRealvalue}`);
    }
}
// Calling object inside the object
console.log(myname1.myRealname.firstname + myname1.myRealname.LastName);

//what is "this" object?
//The Definition of this object is just that contains a current object
// this value can have different valuesdepending on where it is placed.....>
// console.log(this):- basically (this is represnt to window)--window object ka ,ethod properties showlrdega
// console.log(this.alert("hello Bosse"));// just shows the alert box in window --->base page--.return undefined

// function fun (){
//     console.log(this);
// }
// fun();
// what is the current contex of this in line 48 -->window is the current context;

// var myName22 = "akhil";
// function fnto(){
//     console.log(this.myname22)
// }
// fnto();
const obj ={
    mynameq : "akhil",
    myge : "10",
    // fact arrow function are not supported here if you used it give just open and close curly brases
    funr(){
        console.log(this)
    }
}
obj.funr();
