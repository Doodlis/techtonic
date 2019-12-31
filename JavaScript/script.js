function nextInLineAssignment() {

    function nextInLine(arr, item) {
        arr.push(item);

        return arr.shift();
    }

    // Test Setup
    var testArr = [1, 2, 3, 4, 5];

    // Display Code
    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6)); // Modify this line to test
    console.log("After: " + JSON.stringify(testArr));
}

function understandingBooleanValues() {

    function welcomeToBooleans() {

        // Only change code below this line.

        return true; // Change this line

        // Only change code above this line.
    }

    console.log(welcomeToBooleans());
}

function useConditionalLogicwithIfStatements() {
    // Example
    function ourTrueOrFalse(isItTrue) {
        if (isItTrue) return "Yes, it's true";

        return "No, it's false";
    }

    // Setup
    function trueOrFalse(wasThatTrue) {

        // Only change code below this line.
        if (wasThatTrue) {
            return "Yes, that was true";
        }
        else {
            return "No, that was false";
        }
        // Only change code above this line.

    }

    // Change this value to test
    trueOrFalse("true");
}

function comparisonWithTheEqualityOperator() {

    // Setup
    function testEqual(val) {
        if (val == 12) { // Change this line
            return "Equal";
        }
        return "Not Equal";
    }

    // Change this value to test
    testEqual(10);

}

function comparisonWithTheStrictEqualityOperator() {
    // Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testStrict("7");
  
}


