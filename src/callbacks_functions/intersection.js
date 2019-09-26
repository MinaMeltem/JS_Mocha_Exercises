/*
* Question: Construct a function intersect that compares input arrays
* and returns a new array with elements found in all of the inputs.
**/

function commonItems(arr1, arr2){
    let output = [];
    arr1.filter(function (n) {
        if (arr2.includes(n)) output.push(n)
    });
    return output;
}

 function intersect (list) {
     let output = list[0];
     let counter = 1;
     if (list.length <= 1) {
         output = list;
     }

    while (counter < list.length) {
        output = commonItems(output, list[counter]);
        counter++;
    }
    return output;
}

module.exports = intersect;

//Test
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
const arr4 = [];
const arr5 = [5,15];
console.log(commonItems(arr1, arr2));//should log: [5, 15]
console.log(commonItems(arr1, arr4 ));//should log: []
console.log(commonItems(arr2, arr3 ));// should log:[1, 5, 15]
console.log(intersect([arr1, arr2, arr3, arr5, arr4])); //should log: []
console.log(intersect([arr1, arr2, arr3])); //should log: [5, 15]
