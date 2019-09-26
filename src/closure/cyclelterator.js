function cycleIterator (arr){
    let index = 0;
    return function(){
        const result = arr[index++];
        if (index >= arr.length) index = 0;
        return result;
    }
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);

// TEST
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'