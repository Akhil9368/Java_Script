//Event Objects....

// Event object is the parent object of the event object...and it's a property of global object
// MouseEvent,click,mousehover,keyboardevent,etc   and gives the propeties of the events done

// MouseEvent:-MouseDown,MosueUp,Mouseover,MouseOut.MouseEnter ,MouseLeave
// KeyBoardEvent :- OnkeyPress(event.key and event.code)/Onkeydown/onKeyUp
const name1 = document.getElementById('cli');
const fun=() =>{
    alert("Hello this is Event object");
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    // Shows the complete list about the event--->Some Properties and Methods
    // bubbles,buttons,clientX.clientY,offSet, sourceElement,(Type=>Click).==>double click single event.etc

}
name1.addEventListener('click',fun);

// Input Evenets in javascript
//onchange Events is used for input tags like there are input tags haveing the property of text whatever we wrote in text we can get using onchange 
