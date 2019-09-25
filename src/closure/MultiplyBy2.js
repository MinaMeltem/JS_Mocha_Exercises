/**
 * @returns {function(*): number}
 */

function createFunction() {
    function multiplyBy2(num) { return num * 2; }
    return multiplyBy2;
}

let secondLabel = createFunction;
let generatedFunc = createFunction();

// TEST
console.log(secondLabel);// [Function: createFunction]
console.log(secondLabel());// [Function: multiplyBy2]
console.log(generatedFunc(3)); //6