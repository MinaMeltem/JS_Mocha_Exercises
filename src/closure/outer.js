/**
 * @returns {function(): number}
 */

function outer() {
    let counter = 0;
    function increment() { return counter++; }
    return increment;
}
const myNewFunction = outer();

// TEST
console.log(myNewFunction());
console.log(myNewFunction());

