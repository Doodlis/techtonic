function nextInLineAssignment(){

    function nextInLine(arr, item) {
        arr.push(item);

        return arr.shift(); 
      }
      
      // Test Setup
      var testArr = [1,2,3,4,5];
      
      // Display Code
      console.log("Before: " + JSON.stringify(testArr));
      console.log(nextInLine(testArr, 6)); // Modify this line to test
      console.log("After: " + JSON.stringify(testArr));
}

function understandingBooleanValues(){
    
    function welcomeToBooleans() {

        // Only change code below this line.
      
        return true; // Change this line
      
        // Only change code above this line.
      }   

      console.log(welcomeToBooleans());
}



 

