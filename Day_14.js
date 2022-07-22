// Events in Javascript
// there are 4 ways to write event in javascript
// 1.Evenets are the thing that happens with the html elements and tags
// A Events in javscript sometimes done by browser and  sometimes done by users
// 1.Loadig ,2. input field was changed 3,click on the buttons 4,mouseevent,keyboradevent

// 1. using inline event => alert()
//2. using calling a functions
//3. using Inline events --->By reference --> const val =doucument.getelementById('id') -->val.onclick=function(){alert("hello")}
// disadvantage if the value get with the same reference so it's overwrite 
// 4.Using Event Listeners
// const val =  doucument.querySelector('home');
//val.addEvenetListener('click',() => {
//     alert("Hello boss");
// })
// But it will not overwrite sameevenet muliplecall
