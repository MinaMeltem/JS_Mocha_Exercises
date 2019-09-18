/*
Question : Construct a function multiMap that will accept two arrays - an array of keys and an array of callbacks.
multiMap will return an object whose keys match the elements in the array of keys.
The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks,
where the input to each callback is the key
*
*/

const singleMap = (value, callbacks = []) => {
  return callbacks.map(callback => callback(value));
};

/**
 *
 * @param input Array<string>
 * @param callbacks Array<function>
 */
function multiMap(input, callbacks) {
  return input.reduce((hashMap, item) => {
   hashMap[item] = singleMap(item, callbacks);
   return hashMap;
  }, {});
}

module.exports = multiMap;
