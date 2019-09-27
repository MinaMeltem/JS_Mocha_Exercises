/*
* QUESTION: Create a function censor that accepts no arguments. censor will return a function that will accept either two strings,
* or one string. When two strings are given, the returned function will hold onto the two strings as a pair,
* for future use. When one string is given, the returned function will return the same string,
* except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair)
* */

function censor() {
    let hold = {};
    return function( ...args){
        if(args.length === 2) {
            hold[args[0]] = args[1];
        }else if(arguments.length === 1) {
            for(let e in hold) {
                args[0] = args[0].replace(e, hold[e]);
            }
            return args[0];
        }else{
            return "Number of arguments is greater than 2!"
        }
    }
}


// TEST
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'