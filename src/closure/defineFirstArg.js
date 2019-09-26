 function defineFirstArg (func , a0){
    return function(...args) { return func(a0,...args); }
 }

const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);

// TEST
console.log(subFrom20(5)); // should log: 15