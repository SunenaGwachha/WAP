(function(){
	"use strict";
	
/*	produces a list from a array */
	
	 function arrayToList(arr) {
           let returnValue={

               rest:null

           };
           for(let i=0;i<arr.length;i++){

              if(returnValue.rest===null){   // if its first element in list
                  returnValue.value=arr[i];   //dynamically adding value attribute to returnValue object
                 returnValue.rest={

                     rest:null
                 };
              }
              else{
                let counter=returnValue;
                  while(counter.rest!==null){
                      counter=counter.rest;
                  }
                  counter.value=arr[i];
                  counter.rest={

                    rest:null
                  };
              }

           }
           return returnValue;
           
       }
       console.log(arrayToList([10,20]));

/*	produces an array from a list */
	
       function listToArray(list) {

           let arr = [];
           while (list !== null) {
               if(list.value!==undefined)
               arr.push(list.value);
               list = list.rest;
           }
           return arr;
       }

       console.log(listToArray({
           value:1,
           rest:{
               value:2,
               rest:{
                   value:3,
                   rest:null
               }
           }

       }))

console.log(listToArray(arrayToList([10,20,30])));

/* takes an element and a list and creates a new list that adds the element to the front of the input list, and nth */

function prepend(element,list){
    return {
        value:element,
        rest:list
    };

}

       console.log(prepend(10, prepend(20, null)));


function nth(list,index){
    return listToArray(list)[index];
}

       function recursiveNth(list,index){
        if (index === 0)
            return list.value;
        return recursiveNth(list.rest, --index);
       }

       console.log(recursiveNth(arrayToList([10, 20, 30]), 1));

       console.log(nth(arrayToList([10, 20, 30]), 1));
       
}());













