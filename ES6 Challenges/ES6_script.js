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