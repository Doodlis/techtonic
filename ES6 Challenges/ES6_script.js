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