(function() {
    "use strict";


//takes two values and returns true only if they are the same value or are objects with the same properties,
   function deepEqual(left,right){
 
//check if unequal number of elements found they are not equal
			if(Object.keys(left).length !== Object.keys(right).length) return false;
			
//check  type of checking for comparision
            if(typeof(left)!==typeof(right)) return false; 
			
// check if type of found to be object we consider it has key : value so call for every objects using loop and recursive function call
            if(typeof(left)==="object"){    

                for(let key in left){
                    return deepEqual(left[key],right[key]);
                }
            }
            else{
                if(left===right) return true;      // here we reach if the left and right both are not of object so checking using === for equality
                // if equal return true else false
                else
                    return false;
            }


        }


        let obj = {here: {is: "an"}, object: 2};
        console.log(deepEqual(obj, obj));
        console.log(deepEqual(obj, {here: 1, object: 2}));
        console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
       
	}());

 