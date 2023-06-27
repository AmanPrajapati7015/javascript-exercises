const palindromes = function (input) {
    let toCheck = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let len = toCheck.length;
    let till = Math.floor(len/2);
    let isPalindrome = true;
    for (let i = 0; i<till;i++){
        if (toCheck[i] != toCheck[len-1-i]){
            isPalindrome = false;
            break
        }
    }
    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
