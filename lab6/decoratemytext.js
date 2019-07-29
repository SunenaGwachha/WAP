/*
window.onload=function(){
		document.getElementById("click").onclick="changeText1;
		};
*/

(function() {
    "use strict";

    let textarea;
    let timerId = null;
    window.onload = function () {
        textarea = document.getElementById("output");
        document.getElementById("biggerDecorations").onclick = enlarge;
        document.getElementById("checked").onchange = change;

    };

function myFunction() {
  alert("Hello, world!");

}

function changeText() {
	document.getElementById("output").style.fontSize="24px";
	
}
function fontTimer(){
	setTimeout(changeText1,500);
	
}


let timer = null; // stores ID of interval timer 
function enlarge() {
 if (timer === null) {
 		timer = setInterval(changeText1, 500); 
	} else {
 		clearInterval(timer);
 		timer = null;
 } 
} 
	

function changeText1() {
	
	 
	  let fontsize = window.getComputedStyle(textarea, null).getPropertyValue("font-size");
        textarea.style.fontSize = parseInt(fontsize) + 2 + "px";
}

function change() {
	
	let checkedbox = document.getElementById("checked");
	
	if (checkedbox.checked == true){
    document.getElementById("output").style.color="green";
	document.getElementById("output").style.fontWeight="bold";
	document.getElementById("output").style.textDecoration="underline";
	document.body.style.backgroundImage = "url('https://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
  } else {
	   document.getElementById("output").style.color="black";
	    document.getElementById("output").style.fontWeight="normal";
	   document.getElementById("output").style.textDecoration="none";
	   document.body.style.backgroundImage = "none";
	    
  }
    	
}

})();



/*

<button onclick="delayMsg2();">Click me!</button> 
<span id="output"></span>


let timer = null; // stores ID of interval timer 
function delayMsg2() {
 if (timer === null) {
 		timer = setInterval(rudy, 1000); 
	} else {
 		clearInterval(timer);
 		timer = null;
 } 
} 

function rudy() { // called each time the timer goes off
 document.getElementById("output").innerHTML += " Rudy!"; 
}









*/



