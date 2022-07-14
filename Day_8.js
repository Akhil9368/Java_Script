// Map()------>Reduce()---->
// map method return the new Array containing the result of this arrayin the form of boolean DataTransfer(True/False)
// example

var arra = [1,2,3,4,5]
let temp = arra.map((currval) => currval>3);
console.log(temp)

var temp1 =arra.map((currval,index,arra)=>
{
    return `The value of index ${index} is ${currval} of array ${arra}`
});
console.log(temp1);


// ForEach and Map both are call back method and same functionality but the difference is forEach return undefined and map return new array

//  and the most important thing is map() is a chainable method.....Ability to chain anothermethods

// arr =[2,3,4,5,6]---->Multiply every number by 2 and return all those which are less than 15;

var akhi = [2,3,4,5,6];
// first multiply all element by 2 and then filter the element
// let temp2 =akhi.map((currval) =>{
//      return currval*2
//     }).filter((currval) => currval<10);

//     console.log(temp2);


    // Same thing in one line....
    let temp2 =akhi.map((currval) =>currval*2).filter((currval) => currval<10);
    console.log(temp2);


    // Reduce Method.... it's use to convert 3-d or 2-d array into 1-d array
    // but after ecma 2020 we don't use reduce method.....

    // reduce method can takes 4 Arguments...

    // 1.Accumulator
    // 2.current value 
    // 3.current index
    // 4.current Array

    //to find the single data from multiple data
    // total average // total sum// maximmum element

    // same ques previous onebut just add all the element

    let temp3 =akhi.map((currval) =>currval*2).filter((currval) => currval<10).reduce((accumulator,cuuval,number,arra)=>{return (accumulator+cuuval)});
    console.log(temp3);


    // if one data is add expliclitly...
    let temp4 =akhi.map((currval) =>currval*2).filter((currval) => currval<10).reduce((accumulator,cuuval,number,arra)=>{return (accumulator+cuuval)},10);
    console.log(temp4);


    // Flattern an array....
   var arr = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
   ]
   let con = arr.reduce((acc,curr)=>acc.concat(curr));
   console.log(con);

