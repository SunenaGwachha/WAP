(function() {
    "use strict";
	//using function constructors
	const Person ={
	name:'default',
	age:'default',
	
	greet: function() { 
		return " Greetings, my name is " + this.name + " and I am" + this.age + " years old";    
     },	
	salute: function(){
		return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"

     },
	 studentgreet: function(maj){
         return "Hey, my name is "+ this.name +" and I am studying " + maj +".";
     },
	 professorgreet: function(dept){
         return  "Good day, my name is " + this.name+" and I am in the "+dept+" department."
     }
    }
  
      const greeting = Object.create(Person);
	  greeting.name="Sunena";
	  greeting.age="30";
     console.log(greeting.greet());
     console.log(greeting.salute());

     const student = Object.create(Person);
	 student.name="Sunena";
	 student.age="30";
      console.log(student.studentgreet('computer science'));

     const professor = Object.create(Person);
	 professor.name="Tim";
	  professor.age="65";
     console.log(professor.professorgreet('Computer'));
	 
}());


