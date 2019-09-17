/*
* Construct a function intersection that compares input arrays
* and returns a new array with elements found in all of the inputs.
*
*  === sudo ===
* construct a function that takes and array
* iterate through to items , add thm and return single string
*/
function addStr(arr){
    let newStr = '';
    for(item in arr){
        newStr += arr[item] + ",";
    }
    return newStr
}

/* construct another function
* takes a string, iterate through to chars
* and them them into an array
* if char is al
* */
//@Param :list of arrays
function intersection(list){
    let numbs = list.filter(function(number) {
        return number > 7;

}



//Test
const arr1 = [5, 10, 15, 20];
console.log(addStr(arr1));
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
//console.log(intersection([arr1, arr2, arr3])); //should log: [5, 15]