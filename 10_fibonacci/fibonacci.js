const fibonacci = function(n) {
    n = +n;
    let arr = [0, 1]
    if (n < 0) return "OOPS";
    
    for(let i = 1; i<n; i++){
        arr.push(arr[i]+arr[i-1]);
    }
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
