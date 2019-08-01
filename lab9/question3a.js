(function() {
    "use strict";

// Function Constructor
function Person(name, age){
    this.name = name;
	this.age=age;
}

Person.prototype.favoriteHobby=function(hobbies){
	console.log("My Name is " + this.name + " and my hobby is " + hobbies  );
	
}

Person.prototype.species="homo sapien";

const teacher1 = new Person("Prof. John", 40);
teacher1.teach = function(subject){
	
	console.log(this.name + " is now teaching " + subject)
	}
teacher1.teach("Math");

const hobby1= teacher1.favoriteHobby("Watching movies");


const teacher2= new Person("Prof. Jack", 50);



teacher2.teach = function(subject){
	console.log(this.name + " is now teaching " + subject)
	}
teacher2.teach("Science");

const hobby2= teacher2.favoriteHobby("Singing");


       		
   }());







