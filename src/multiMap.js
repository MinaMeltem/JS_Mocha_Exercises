/*
Question : Construct a function multiMap that will accept two arrays - an array of keys and an array of callbacks.
multiMap will return an object whose keys match the elements in the array of keys.
The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks,
where the input to each callback is the key
*
*/
function multiMap(keys , callbacks) {
    let obj = {};
    keys.forEach(function(k) {
        let values = [];
        for(let f in callbacks) {
            values.push( callbacks[f](k) ) ;
        }
        obj[k] = values;
    });
    return obj;
}
//Callbacks
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }


// Test
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions));

/* should log:
    { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
      glue: ['GLUE', 'Glue', 'glueglue'],
      beer: ['BEER', 'Beer', 'beerbeer'] }
*/