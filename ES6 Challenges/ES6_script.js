function nextInLineAssignment() {

    function nextInLine(arr, item) {
        arr.push(item);

        return arr.shift();
    }
}
function testFunction() {

    function test(a, b) {
        if (a > b) {
            return "yes";
        }
        return "no";
    }
    return test(7, 6)
}