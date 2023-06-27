const removeFromArray = function() {
    l = arguments.length;
    arr = arguments[0];
    i = 1;
    while (i <l){
        const index = arr.indexOf(arguments[i]);
        if (index > -1) { 
            arr.splice(index, 1); 
        }
        i++
    }
    return arr;
};

module.exports = removeFromArray;
