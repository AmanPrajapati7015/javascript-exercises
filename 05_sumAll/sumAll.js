const sumAll = function(start, end) {
    if (start < 0 || end<0 ) return "ERROR";
    if (typeof(start) != "number" || typeof(end) != "number") return "ERROR";
    let i = (start<end) ? start: end;
    actualEnd = (end > start)? end:start;
    let sum = 0;
    while (i <= actualEnd){
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
