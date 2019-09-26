
function dateStamp(cb) {
    let output = {};
    let today = new Date().toDateString();
    return function(...arg) {
        output['date'] = today;
        output['output'] = cb(...arg);
        return output;
    }
}

// TEST
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }