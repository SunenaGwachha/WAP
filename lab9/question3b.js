(function() {
    "use strict";

//using object.create 
const Person={
	name:'default',
	age:'default',
	species:"homo sapien",
	teaches:function(subject){
		console.log(this.name + " is now teaching " + subject)
			
	},	
	favoriteHobby:function(hobbies){
	console.log("My Name is " + this.name + " and my hobby is " + hobbies  );
	
}
	
}
const teacher1=Object.create(Person);
teacher1.name="Prof. John";
teacher1.age=40;
teacher1.teaches("Science");
teacher1.favoriteHobby("Watching movies");



const teacher2=Object.create(Person);
teacher2.name="Prof. Harry";
teacher1.age=50;
teacher2.teaches("Math");
teacher2.favoriteHobby("Singing");

	       		
   }());







