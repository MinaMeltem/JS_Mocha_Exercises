/*
* Question: Construct a function intersection that compares input arrays
* and returns a new array with elements found in all of the inputs.
**/

/*  Callback
    @param1 {Array} arr1 The first array
    @param1 {Array} arr2 The second array
    @return {Array}      The array which includes the common elements of input arrays
*/
function commonItems(arr1, arr2){
    let output = [];
    arr1.filter(function(n){if(arr2.includes(n)) output.push(n)});
    return output;
}

function intersection(list){
    let output = list[0];
    let counter = 1;
    if (list.length <= 1) { output = list;}

    while (counter < list.length) {
        output = commonItems(output, list[counter]);
        counter++;
    }
    return output
}

//Test
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
const arr4 = [];
const arr5 = [5,15];
console.log(commonItems(arr1, arr2));//should log: [5, 15]
console.log(commonItems(arr1, arr2, arr3 ));//should log: [5, 15]
console.log(intersection([arr1, arr2, arr3, arr5, arr4])); //should log: []