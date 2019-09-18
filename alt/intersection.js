/*
* Question: Construct a function intersection that compares input arrays
* and returns a new array with elements found in all of the inputs.
**/

/**
 @param1 Array<T> arr1 The first array
 @param2 Array<T> arr2 The second array

 @return Array<T>      The array which includes the common elements of input arrays
 */
function commonItems(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

function commonItemsNoFilter(arr1, arr2) {
  const [bigger, smaller] = (arr1.length > arr2.length) ? [arr1, arr2] : [arr2, arr1];

  return bigger.reduce((aggregator, item) => smaller.includes(item) ? [...aggregator, item] : aggregator, []);
}

/**
 * @param list Array<Array<T>>
 *
 * @returns Array<T>
 */
function intersection(list) {
  if (list.length === 0) {
    return [];
  }

  const [first, ...rest] = list;
  return rest.reduce((agg, item) => commonItems(agg, item), first);
}

module.exports = intersection;

// // //Test
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// const arr4 = [];
// const arr5 = [5,15];
//
// const arr7 = ['one', 'two', 'foo'];
// const arr8 = ['one', 'fizzz', 'buzz'];
// console.log("Test common items finds intersection of two arrays:", commonItems(arr1, arr2) === [5, 15] , "Yolo");
// console.log(commonItems(arr7, arr8));//should log: ['one']
// console.log(commonItems(arr1, arr2));//should log: [5, 15]
// console.log(commonItems(arr1, arr2, arr3 ));//should log: [5, 15]
// console.log(intersection([arr1, arr2, arr3, arr5, arr4])); //should log: []