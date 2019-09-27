/*
* QUESTION: Create a function majority that accepts an array and a callback. The callback will return either true or false.
* majority will iterate through the array and perform the callback on each element until it can be determined if
* the majority of the return values from the callback are true. If the number of true returns is equal to the number
* of false returns, majority should return false.
* 
*/

function mjrty(arr, callback) {
    let f = 0;
    let t = 0;
    (arr.reduce(callback,arr[0]))? f++ : t++ ;
    return (f >= t);
}

const isOdd = function(num) { return num % 2 === 1; };

//TEST
console.log(mjrty([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(mjrty([2, 3, 4, 5], isOdd)); // should log: false
