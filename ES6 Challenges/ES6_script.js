function nextInLineAssignment() {

    function nextInLine(arr, item) {
        arr.push(item);

        return arr.shift();
    }
}
function differencesBetweenTheVarAndLetKeywords() {

    let catName;
    let quote;
    function catTalk() {
        "use strict";


        catName = "Oliver";
        quote = catName + " says Meow!";

    }
    catTalk();
    return quote;
}

function compareScopesOfTheVarAndLetKeywords() {
    function checkScope() {
        'use strict';
        let i = 'function scope';
        if (true) {
            let i = 'block scope';
            console.log('Block scope i is: ', i);
        }
        console.log('Function scope i is: ', i);
        return i;
    }
    return checkScope();
}

function declareAReadOnlyVariableWithTheConstKeyword() {
    function printManyTimes(str) {
        "use strict";

        // change code below this line

        const SENTENCE = str + " is cool!";
        for (let i = 0; i < str.length; i += 2) {
            console.log(SENTENCE);
        }

        // change code above this line

    }
    return printManyTimes("freeCodeCamp");

}

function mutateAnArrayDeclaredWithConst() {
    const s = [5, 7, 2];
    function editInPlace() {
        'use strict';
        // change code below this line

        s[0] = 2;
        s[1] = 5;
        s[2] = 7;



        // change code above this line
    } editInPlace();
    return s;

}

function preventObjectMutation() {
    function freezeObj() {
        'use strict';
        const MATH_CONSTANTS = {
            PI: 3.14
        };
        // change code below this line
        Object.freeze(MATH_CONSTANTS);

        // change code above this line
        try {
            MATH_CONSTANTS.PI = 99;
        } catch (ex) {
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();
    return freezeObj();
}

function useArrowFunctionsToWriteConciseAnonymousFunctions() {
    const magic = () => new Date();
}

function writeArrowFunctionsWithParameters() {
    const myConcat = (arr1, arr2) => arr1.concat(arr2);

    // test your code
    console.log(myConcat([1, 2], [3, 4, 5]));

    return myConcat([1, 2], [3, 4, 5]);

}
function setDefaultParametersForYourFunctions() {
    const increment = (number, value = 1) => number + value;

    console.log(increment(5, 2)); // returns 7
    console.log(increment(5)); // returns 6

    return increment(5);
}

function useTheRestParameterWithFunctionParameters() {
    const sum = (...args) => {
        return args.reduce((a, b) => a + b, 0);
    }
    console.log(sum(1, 2, 3)); // 6
    return (sum(1, 2, 3));
}

function useTheSpreadOperatorToEvaluateArraysInPlace() {
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    arr2 = [...arr1];  // change this line

    console.log(arr2);
    return arr2;
}

function useDestructuringAssignmentToExtractValuesFromObjects() {
    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };

    // change code below this line

    const { today, tomorrow } = HIGH_TEMPERATURES;

    // change code above this line

    //   console.log(yesterday) // should be not defined
    //   console.log(today); // should be 77
    //   console.log(tomorrow); // should be 80
    return HIGH_TEMPERATURES.tomorrow;

}

function useDestructuringAssignmentToAssignVariablesFromObjects() {
    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };

    // change code below this line

    const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

    // change code above this line

    //   console.log(yesterday) // should be not defined
    //   console.log(highToday); // should be 77
    //   console.log(highTomorrow); // should be 80
    return HIGH_TEMPERATURES.today;
}

function useDestructuringAssignmentToAssignVariablesFromNestedObjects() {
    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };

    // change code below this line
    const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

    // change code above this line

    console.log(lowToday); // should be 64
    console.log(highToday); // should be 77

}


function useDestructuringAssignmentToAssignVariablesFromArrays() {
    let a = 8, b = 6;
    // change code below this line
    [a, b] = [b, a]
    // change code above this line
    console.log(a); // should be 6
    console.log(b); // should be 8
}