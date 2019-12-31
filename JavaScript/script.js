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
function practiceComparingDifferentValues() {
    // Setup
    function compareEquality(a, b) {
        if (a === b) { // Change this line
            return "Equal";
        }
        return "Not Equal";
    }

    // Change this value to test
    compareEquality(10, "10");

}

function comparisonWithTheInequalityOperator() {
    // Setup
    function testNotEqual(val) {
        if (val != 99) { // Change this line
            return "Not Equal";
        }
        return "Equal";
    }

    // Change this value to test
    testNotEqual("99");
}

function comparisonWithTheStrictInequalityOperator() {
    // Setup
    function testStrictNotEqual(val) {
        if (val !== 17) { // Change this line
            return "Not Equal";
        }
        return "Equal";
    }

    // Change this value to test
    testStrictNotEqual(10);
}

function comparisionWithGreaterThanOperator() {
    function testGreaterThan(val) {
        if (val > 100) {  // Change this line
          return "Over 100";
        }
      
        if (val > 10) {  // Change this line
          return "Over 10";
        }
      
        return "10 or Under";
      }
      
      // Change this value to test
      testGreaterThan(3);
}

function comparisonWithTheGreaterThanOrEqualToOperator() {
    function testGreaterOrEqual(val) {
        if (val >= 20) {  // Change this line
          return "20 or Over";
        }
      
        if (val >=10) {  // Change this line
          return "10 or Over";
        }
      
        return "Less than 10";
      }
      
      // Change this value to test
      testGreaterOrEqual(10);
}

function comparisonWithTheLessThanOperator() {
    function testLessThan(val) {
        if (val < 25) {  // Change this line
          return "Under 25";
        }
      
        if (val < 55) {  // Change this line
          return "Under 55";
        }
      
        return "55 or Over";
      }
      
      // Change this value to test
      testLessThan(28);
}

function comparisonWithTheLessThanOrEqualToOperator() {
    function testLessOrEqual(val) {
        if (val <= 12) {  // Change this line
          return "Smaller Than or Equal to 12";
        }
      
        if (val <= 24) {  // Change this line
          return "Smaller Than or Equal to 24";
        }
      
        return "More Than 24";
      }
      
      // Change this value to test
      testLessOrEqual(10);
      
}