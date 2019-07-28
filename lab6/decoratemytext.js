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
        document.getElementById("biggerDecorations").onclick = changeText1;
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



