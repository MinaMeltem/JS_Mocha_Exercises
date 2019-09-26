/*
* QUESTION: Construct a function union that takes an input array of arrays,
* compares each array, and returns a new flat array that contains all elements.
* If there are duplicate elements, only add it once to the new array.
* Preserve the order of the elements starting from the first element of the first input array
* */

function union(list){
    let output = [] ;
    for (let array = 0; array < list.length;  array++){
        for(let item in list[array]) {
           output.push(list[array][item]);
        }
    }
    return unique(output);
}

// Callback
function unique(arr){
    let output = [];
    for(let item in arr){
        if(!output.includes(arr[item])){
            output.push(arr[item]);
        }
    }
    return output;
}

// TEST
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
