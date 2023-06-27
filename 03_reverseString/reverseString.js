const reverseString = function(input) {
    const arr = input.split("");
    l = arr.length;
    let temp;
    for (let i = 0; i < l/2; i++){
        temp = arr[i];
        arr[i] = arr[l-1-i];
        arr[l-1-i] = temp; 
    }
    return arr.join('');

};

// Do not edit below this line
module.exports = reverseString;
