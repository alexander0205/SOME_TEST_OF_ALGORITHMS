// #Developer name: 				Alexander Ferreras
// #Programming languages: 	Javascript


// #EX 1
// # Create a method that receives an array of 100,000 integers and outputs the frequency with which each integer appears in ascending order
// #	input:
// #				array = [1,2,4,5,6,8,2,5,3,2]
// #	output:
// #				array = [ [1,1] [2,3] [3,1] [4,1] [5,2] [6,1] [8,1] ]
// # Your code here */
let listNumbers = [1,2,4,5,6,8,2,5,3,2];

function FrequencyArraySort(array) {
	var frequency = {};
	
	array.forEach(
		function(value) { frequency[value] = 0; }
	); 
	
	var uniques = array.filter(
		function(value) { return ++frequency[value] == 1; }
	);
  
	return frequency
};

FrequencyArraySort(listNumbers)


// #EX 2   
// # Write a simple algorithm that prints numbers from 1 to 200. If the number is a multiple of 3, print "Blue" next to the number,
// #  if the number is a multiple of 5 it print "Red", if the number is a multiple of both 3 and 5 it print "BlueRed".
// #	input:
// #				 NONE
// #	output:
// #				1
// #				2
// #				3 Blue
// #				4
// #				5 Red
// #				6
// #				7
// #				...
// #				14
// #				15 BlueRed
// #				16
// #				...
// #        200  Red
// # Your code here */
lenumbersArray  = new Array(200);

for(var i=0; i <= numbersArray.length; i++){
  if((i % 3 == 0) && ( i % 5 == 0)){
    console.log("BlueRed",i);
  }else if( i % 3 == 0 ) {
            console.log("blue",i);
        }
       else  if( i % 5 == 0 ) {
           console.log("red",i);
        }else{ console.log(i);  }
}



// # # #3
// # # /*
// # #   Enter the function to calculate the factorial of an integer
// # Your code here */


// ## #4
// #	create a method for determinate when a word or number is palindrome
// #Tip:   civic  == civic
// # Your code here */
