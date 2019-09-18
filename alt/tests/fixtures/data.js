const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

module.exports = {
  intersection: [
    {
      name: 'should return empty array if any array is empty',
      input: [arr1, arr2, arr3, []],
      expected: [],
    },
    {
      name: 'should return an array of common elements of given ArrayList',
      input: [arr1, arr2, arr3],
      expected: [5, 15],
    },
    {
      name: 'should move left to right',
      input: [[1], [9, 11, 66, 1]],
      expected: [1],
    },
    {
      name: 'no array provided, returns empty',
      input: [],
      expected: [],
    },
    {
      name: 'only one array provided, returns that array',
      input: [[1, 6, 8]],
      expected: [1, 6, 8],
    }
  ],
  multiMap: [
    {
      name: 'String keys, with callbacks',
      keys: ['catfood', 'glue', 'beer'],
      callbacks: [
        function uppercaser(str) {
          return str.toUpperCase();
        },
        function capitalize(str) {
          return str[0].toUpperCase() + str.slice(1).toLowerCase();
        },
        function repeater(str) {
          return str + str;
        }
      ],
      expected: {
        catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
        glue: ['GLUE', 'Glue', 'glueglue'],
        beer: ['BEER', 'Beer', 'beerbeer']
      }
    },
    {
      name: 'No Callbacks for joo',
      keys: ['catfood', 'glue', 'beer'],
      callbacks: [],
      expected: {
        catfood: [],
        glue: [],
        beer: [],
      }
    }
  ]
};
