/* Write a function once that accepts a callback as input and returns a function.
When the returned function is called the first time, it should call the callback and return that output.
If it is called any additional times, instead of calling the callback again it will simply
return the output value from the first time it was called.*/

function after(numOfTimes, cb){
    let counter = 1;
    function invokeCb(arg){
        if(counter === numOfTimes){
            return cb(arg);
        } else {
            counter ++ ;
        }
    }
    return invokeCb;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed