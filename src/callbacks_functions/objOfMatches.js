/*
* Question: Construct a function objOfMatches that accepts two arrays and a callback.
* objOfMatches will build an object and return it.
* To build the object, objOfMatches will test each element of the first array using the callback
* to see if the output matches the corresponding element (by index) of the second array.
* If there is a match, the element from the first array becomes a key in an object,
* and the element from the second array becomes the corresponding value.
* */

function objOfMatches(arr1, arr2, callback) {
    let output = {};
    let len ;
    let i = 0;

    (arr1 < arr2)? len = arr1.length : len = arr2.length;
    while ( i < len) {

        if (arr2[i] === arr2[i].toUpperCase()){
            if (callback(arr1[i], arr2[i])) {
                output[arr1[i]] = arr2[i];
            }
        }
        i ++ ;
    }
    return output;
}

// Callback
function compare ( e1, e2){
    return (e1.toLowerCase() === e2.toLowerCase());
}

//TEST
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
console.log(objOfMatches(arr1, arr2, compare)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
