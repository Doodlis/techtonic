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

    return welcomeToBooleans();
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
    return trueOrFalse("true");
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
    return testEqual(10);

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
    return testStrict("7");

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
    return compareEquality(10, "10");

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
    return testNotEqual("99");
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
    return testStrictNotEqual(10);
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
    return testGreaterThan(3);
}

function comparisonWithTheGreaterThanOrEqualToOperator() {
    function testGreaterOrEqual(val) {
        if (val >= 20) {  // Change this line
            return "20 or Over";
        }

        if (val >= 10) {  // Change this line
            return "10 or Over";
        }

        return "Less than 10";
    }

    // Change this value to test
    return testGreaterOrEqual(10);
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
    return testLessThan(28);
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
    return testLessOrEqual(10);

}

function comparisonsWithTheLogicalAndOperator() {
    function testLogicalAnd(val) {
        // Only change code below this line

        if (val <= 50 && val >= 25) {
            return "Yes";
        }

        // Only change code above this line
        return "No";
    }

    // Change this value to test
    return testLogicalAnd(25);

}

function comparisonsWithTheLogicalOrOperator() {
    function testLogicalOr(val) {
        // Only change code below this line

        if (val < 10 || val > 20) {
            return "Outside";
        }


        // Only change code above this line
        return "Inside";
    }

    // Change this value to test
    return testLogicalOr(25);
}
function introducingElseStatements() {
    function testElse(val) {
        var result = "";
        // Only change code below this line

        if (val > 5) {
            result = "Bigger than 5";
        }

        else {
            result = "5 or Smaller";
        }

        // Only change code above this line
        return result;
    }

    // Change this value to test
    return testElse(10);
}

function introducingElseIfStatements() {
    function testElseIf(val) {
        if (val > 10) {
            return "Greater than 10";
        }

        else if (val < 5) {
            return "Smaller than 5";
        }
        else {
            return "Between 5 and 10";
        }
    }
    // Change this value to test
    return testElseIf(10);

}

function logicalOrderInIfElseStatements() {
    function orderMyLogic(val) {
        if (val < 5) {
            return "Less than 5";
        } else if (val < 10) {
            return "Less than 10";
        } else {
            return "Greater than or equal to 10";
        }
    }

    // Change this value to test
    return orderMyLogic(7);

}

function chainingIfElseStatements() {
    function testSize(num) {
        // Only change code below this line
        if (num < 5) {
            return "Tiny"
        }
        else if (num < 10) {
            return "Small"
        }
        else if (num < 15) {
            return "Medium"
        }
        else if (num < 20) {
            return "Large"
        }
        else
            return "Huge"
    }

    // Change this value to test
    return testSize(25);
}
function golfCode() {
    var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
    function golfScore(par, strokes) {
        // Only change code below this line
        if (strokes == 1) {
            return names[0];
        } else if (strokes <= par - 2) {
            return names[1];
        } else if (strokes == par - 1) {
            return names[2];
        } else if (strokes == par) {
            return names[3];
        } else if (strokes == par + 1) {
            return names[4];
        } else if (strokes == par + 2) {
            return names[5];
        } else {
            return names[6];
        }



        // Only change code above this line
    }

    // Change these values to test
    return golfScore(9, 4);

}