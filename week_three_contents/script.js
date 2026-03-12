// JavaScript Document
/*  External JavaScript */
// 1.types.html
//document.write("I am using external JavaScript file. ");

// general anonymous function for line break;
var yyy = function(){
    document.write("<br>");
}
// 3.functions.html
function testing(){
    document.write("JavaScript has amazing functions");
    yyy();  // anonymous function call for line break
}
function testing_one(x){
    document.write("The receiving parameter value is: " + x);
    yyy(); // anonymous function call for line break
}
function testing_two(){
    var one = "I am testing built-in functions of strings. ";
    document.write("Length of the string is: " + one.length);   // length of string var one
    yyy();
    document.write("built-in word in string is at position: " + one.search("built-in"));
    yyy();    
}

// 8.events.html
function click_event(){
    alert("You single clicked me!");
}
function click_dbl_event(){
    alert("You double clicked me!");
}
function rightclickevent(){
    alert("You have clicked the right button");
}
function keyDown(){
    alert("You pressed one of the keyboard button");
}
function keyUp(){
    alert("You are testing on key up keyboard event");
}
function keyPress(){
    alert("You are testing on key press keyboard event");
}
function mouseOverEvent(){
    alert("You move the mouse over the paragraph");
}
function mouseOutEvent(){
    alert("You move the mouse out of the paragraph");
}
function mouseDownEvent(){
    alert("You down the mouse upon the paragraph");
}
function mouseUpEvent(){
    alert("You up the mouse from the paragraph")
}
var x = 0;
function moveMouse()
{
	document.getElementById('mouseMoveDiv').innerHTML = x++;
}

// 9.DOM.html
function dblevent(){
    document.getElementById('dblvictim').innerHTML = "Double Click Changed Me.";
}
function singleclickevent(){
    document.getElementById('clickvictim').style.backgroundColor = "cyan";
}
function txtbox_Testing(){	
	document.getElementById('heading').style.fontSize = "48px";
}


































