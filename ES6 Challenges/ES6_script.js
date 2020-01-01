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
    return checkScope(i);
}