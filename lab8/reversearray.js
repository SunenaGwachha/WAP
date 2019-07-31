(function() {
    "use strict";
/* takes an array as argument and produce a new array that has same elements in inverse order */
     function reverseArray(arr){
            let newarr=[];
            for(let i=arr.length-1;i>=0;i--){
                newarr[i]=arr[arr.length-i-1];
            }
            return newarr;
        }
        console.log(reverseArray(["A","B","C"]));


        let arrayValue = [1, 2, 3, 4, 5];
        reverseArrayInPlace(arrayValue);
        console.log(arrayValue);

/* modifies the array given as argument by reversing its elements*/

        function reverseArrayInPlace(arr) {
            for(let i=0;i<arr.length/2;i++){
                let temp=arr[i];
                arr[i]=arr[arr.length-i-1];
                arr[arr.length-i-1]=temp;
            }
            return arr;

        }
		
		
		
		
		function myFunctionTest1(expected, found) {
    if(expected.length !== found.length)
        return "TEST FAILED.  Expected length " + expected.length + " found length" + found.length;
    for(var i = expected.length; i--;) {
        if(expected[i] !== found[i])
            return "TEST FAILED.  Expected " + expected[i] + " found " + found[i];
    }

    return "TEST SUCCEEDED";
}


/*compute the max length of the word  than given integer in an array of string and return array */


console.log("Expected output of reverse array  is '[C,B,A]'  " + myFunctionTest1(["C","B","A"], reverseArray(["A","B","C"])));
console.log("Expected output of reverse array  is '[5,4,3,2,1]'  " + myFunctionTest1([5,4,3,2,1], reverseArrayInPlace([1, 2, 3, 4, 5])));


		
   }());

 