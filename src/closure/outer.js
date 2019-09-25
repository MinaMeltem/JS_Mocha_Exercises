
//Example1

let val1 = 2;
function multiplyThis(n) {
    let ret = n * val1;
    return ret;
}

let multiplied = multiplyThis(6);

console.log('example of scope:', multiplied);



//Example2
function outer(){
    let counter  = 0;
    function increment(){
        return counter ++;
    }
    return increment;
}

const myNewFunction = outer();
//myNewFunction();
console.log (myNewFunction());
//myNewFunction();
console.log (myNewFunction());

