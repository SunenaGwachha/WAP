(function() {
    "use strict";
	//using function constructors
	function Person (name, age){
   //console.log(this);
    this.name =name;
    this.age = age;
    
    }
   // const greeting = new Person();
    Person.prototype.greet = function() { return " Greetings, my name is " + this.name + " and I am" + this.age + " years old";    
     }

     Person.prototype.salute = function(){ return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"

     } 
     const greeting = new Person('Sunena', 30);
     console.log(greeting.greet());
     console.log(greeting.salute());

     const student = new Person('sunena', 30);
     student.major='computer science';
     Person.prototype.greet = function(){
         return "Hey, my name is "+ this.name +" and I am studying " + student.major +".";
     }
     console.log(student.greet());

     const professor = new Person('Tim',65);
     professor.department = 'Computer';
     Person.prototype.greet= function(){
         return  "Good day, my name is " + this.name+" and I am in the "+professor.department+" department."
     }
     console.log(professor.greet());
	 
}());