/**
 * @param numOfTimes {Integer}
 * @param cb {callback}
 * @returns invokeCB {function(arg): string }
 */

function after(numOfTimes, cb) {
    let counter = 1;
    function invokeCb(arg) {
        if (counter === numOfTimes) {
            return cb(arg);
        } else {
            counter++;
        }
    }
    return invokeCb;
}

const called = function (string) { return ('hello ' + string); };
const afterCalled = after(3, called);

// TEST
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed