/*
window.onload=function(){
		document.getElementById("click").onclick="changeText1;
		};
*/

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
	 document.getElementById("output").style.fontSize = parseInt(document.getElementById("output").style.fontSize)+"2px";
}

function change() {
	if (checked.checked == true){
    document.getElementById("output").style.color="green";
	document.getElementById("output").style.fontWeight="bold";
	document.getElementById("output").style.textDecoration="underline";
	document.body.style.background = "url('https://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
  } else {
	   document.getElementById("output").style.color="black";
	    document.getElementById("output").style.fontWeight="normal";
	   document.getElementById("output").style.textDecoration="none";
	    
  }
    	
}
