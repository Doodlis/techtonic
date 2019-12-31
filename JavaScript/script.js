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

function selectingFromManyOptionsWithSwitchStatements() {
    function caseInSwitch(val) {
        var answer = "";
        // Only change code below this line
        switch (val) {
            case 1:
                answer = "alpha";
                break;
            case 2:
                answer = "beta";
                break;
            case 3:
                answer = "gamma";
                break;
            case 4:
                answer = "delta";
                break;
        }



        // Only change code above this line
        return answer;
    }

    // Change this value to test
    return caseInSwitch(4);
}

function addingADefaultOptionInSwitchStatements() {
    function switchOfStuff(val) {
        var answer = "";
        // Only change code below this line

        switch (val) {
            case "a":
                answer = "apple";
                break;
            case "b":
                answer = "bird";
                break;
            case "c":
                answer = "cat";
                break;
            default:
                answer = "stuff";
                break;

        }
        // Only change code above this line
        return answer;
    }

    // Change this value to test
    return switchOfStuff("c");

}

function multipleIdenticaOptionInSwitchStatements() {
    function sequentialSizes(val) {
        var answer = "";
        // Only change code below this line

        switch (val) {
            case 1:
            case 2:
            case 3:
                answer = "Low";
                break;
            case 4:
            case 5:
            case 6:
                answer = "Mid";
                break;
            case 7:
            case 8:
            case 9:
                answer = "High";

        }


        // Only change code above this line
        return answer;
    }

    // Change this value to test
    return sequentialSizes(9);
}

function replacingIfElseChainsWithSwitch() {
    function chainToSwitch(val) {
        var answer = "";
        // Only change code below this line
        switch (val) {
            case "bob":
                answer = "Marley";
                break;
            case 42:
                answer = "The Answer";
                break;
            case 1:
                answer = "There is no #1";
                break;
            case 99:
                answer = "Missed me by this much!";
                break;
            case 7:
                answer = "Ate Nine";
                break;
        }

        // Only change code above this line
        return answer;
    }

    // Change this value to test
    return chainToSwitch(7);
}

function returningBooleanValuesFromFunctions() {
    function isLess(a, b) {
        // Fix this code
        return a < b;
    }

    // Change these values to test
    return isLess(15, 10);
}

function returnEarlyPatternForFunctions() {
    // Setup
    function abTest(a, b) {
        // Only change code below this line
        if (a < 0 || b < 0) {
            return undefined;
        }


        // Only change code above this line

        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }

    // Change values below to test your code
    return abTest(2, 2);
}

function countingCards() {
    var count = 0;

    function cc(card) {
        // Only change code below this line  
        switch (card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
                break;
            case 10:
            case "J":
            case "Q":
            case "K":
            case "A":
                count--;
                break;
        }
        if (count > 0) {
            return count + " Bet";
        } else {
            return count + " Hold";
        }

        // Only change code above this line
    }

    // Add/remove calls to test your function.
    // Note: Only the last will display
    return cc("A"), cc(2), cc(6), cc(4), cc(5);
}

function buildJavaScriptObjects() {
    // Example
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends": ["everything!"]
    };

    // Only change code below this line.

    var myDog = {
        "name": "Nika",
        "legs": 10,
        "tails": 5,
        "friends": ["people", "birds", "horses"]
    };
    return myDog["friends"];
}

function accessingObjectPropertiesWithDotNotation() {
    // Setup
    var testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
    };

    // Only change code below this line

    var hatValue = testObj.hat;      // Change this line
    var shirtValue = testObj.shirt;    // Change this line
    return [hatValue, shirtValue];
}

function accessingObjectPropertiesWithBracketNotation() {
    // Setup
    var testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
    };

    // Only change code below this line

    var entreeValue = testObj["an entree"];   // Change this line
    var drinkValue = testObj["the drink"];    // Change this line
    return [entreeValue, drinkValue];
}

function AccessingObjectPropertiesWithVariables() {
    // Setup
    var testObj = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
    };

    // Only change code below this line;

    var playerNumber = 16;       // Change this Line
    var player = testObj[playerNumber];
    return player;
}

function updatingObjectProperties() {
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends": ["everything!"]
    };

    ourDog.name = "Happy Camper";

    // Setup
    var myDog = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
    };
    myDog.name = "Happy Coder";
    // Only change code below this line.
    return myDog.name;
}

function addNewPropertiesToAJavaScriptObject() {
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends": ["everything!"]
    };

    ourDog.bark = "bow-wow";

    // Setup
    var myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
    };
    myDog.bark = "woof";
    // Only change code below this line.
    return myDog.bark;
}

function deletePropertiesFromAJavaScriptObject() {
    // Example
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends": ["everything!"],
        "bark": "bow-wow"
    };

    delete ourDog.bark;

    // Setup
    var myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"],
        "bark": "woof"
    };
    delete myDog.tails;
    // Only change code below this line.
    return myDog.tails;
}

function usingObjectsForLookups() {// Setup
    function phoneticLookup(val) {
        var result = "";

        // Only change code below this line
        var lookup = {
            "alpha": "Adams",
            "bravo": "Boston",
            "charlie": "Chicago",
            "delta": "Denver",
            "echo": "Easy",
            "foxtrot": "Frank"
        }
        result = lookup[val];
        // Only change code above this line
        return result;
    }

    // Change this value to test
    return phoneticLookup("echo");
}

function testingObjectsForProperties() {
    // Setup
    var myObj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleigh"
    };

    function checkObj(checkProp) {
        // Your Code Here
        if (myObj.hasOwnProperty(checkProp) == true) {
            return myObj[checkProp];
        }
        else {
            return "Not Found"
        }
    }
    // Test your code by modifying these values
    return checkObj("pet");
}

function manipulatingComplexObjects() {
    var myMusic = [
        {
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats": [
                "CD",
                "8T",
                "LP"
            ],
            "gold": true
        }
        ,
        // Add record here
        {
            "artist": "Queen",
            "title": "Bohemian Rapsody",
            "release_year": 1989,
            "formats": [
                "CD",
                "DVD",
                "LP"
            ],
            "gold": true
        }
    ];
    var secondRecord = myMusic[1].formats;
    return secondRecord;
}

function accessingNestedObjects() {
    // Setup
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };

    var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

    return gloveBoxContents;
}

function accessingNestedArrays() {
    // Setup
    var myPlants = [
        {
            type: "flowers",
            list: [
                "rose",
                "tulip",
                "dandelion"
            ]
        },
        {
            type: "trees",
            list: [
                "fir",
                "pine",
                "birch"
            ]
        }
    ];

    // Only change code below this line

    var secondTree = myPlants[1].list[1]; // Change this line
    return secondTree;
}

function recordCollection() {
    // Setup
    var collection = {
        2548: {
            album: "Slippery When Wet",
            artist: "Bon Jovi",
            tracks: [
                "Let It Rock",
                "You Give Love a Bad Name"
            ]
        },
        2468: {
            album: "1999",
            artist: "Prince",
            tracks: [
                "1999",
                "Little Red Corvette"
            ]
        },
        1245: {
            artist: "Robert Palmer",
            tracks: []
        },
        5439: {
            album: "ABBA Gold"
        }
    };

    // Only change code below this line
    function updateRecords(id, prop, value) {
        var album = collection[id];

        if (!album) {
            return collection;
        }

        if (prop === "tracks") {
            if (!value || value.length == 0) {
                delete album[prop];
            }
            else if (!album[prop]) {
                album[prop] = new Array();
                album[prop].push(value);
            }
            else {
                album[prop].push(value);
            }
        }
        else {
            if (!value || value.length == 0)
                delete album[prop];
            else
                album[prop] = value;
        }

        return collection;
    }

    // Alter values below to test your code
    updateRecords(5439, "artist", "ABBA");


}

function iteratewithJavaScriptWhileLoops() {
    // Setup
    var myArray = [];
    var i = 0;

    while (i < 6) {
        myArray.push(5 - i);
        i++;
    }

    return myArray;
    // Only change code below this line.
}

function iterateWithJavaScriptForLoops() {
    // Example
    var ourArray = [];

    for (var i = 0; i < 5; i++) {
        ourArray.push(i);
    }


    // Setup
    var myArray = [];

    for (var i = 1; i <= 5; i++) {
        myArray.push(i);
    }
    // Only change code below this line.
    return myArray;
}

function iterateOddNumbersWithAForLoop() {
    // Example
    var ourArray = [];

    for (var i = 0; i < 10; i += 2) {
        ourArray.push(i);
    }

    // Setup
    var myArray = [];
    for (var i = 1; i <= 9; i += 2) {
        myArray.push(i)
    }
    // Only change code below this line.

}
function countBackwardsWithAForLoop() {
    // Example
    var ourArray = [];

    for (var i = 10; i > 0; i -= 2) {
        ourArray.push(i);
    }

    // Setup
    var myArray = [];
    for (var i = 9; i >= 1; i -= 2) {
        myArray.push(i);
    }
    // Only change code below this line.

}

function iterateThroughAnArrayWithAForLoop(){
    // Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
}
function nestingForLoops() {
    function multiplyAll(arr) {
        var product = 1;
        // Only change code below this line
      for (var i = 0; i < arr.length; i++) {
      
        for (var j = 0;  j < arr[i].length; j++){
          product = product * arr[i][j];
        }
      
      }
        // Only change code above this line
        return product;
      }
      
      // Modify values below to test your code
      multiplyAll([[1,2],[3,4],[5,6,7]]);
      
}