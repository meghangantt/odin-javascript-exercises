const reverseString = function(inputString) {
    let newString = "";
    const inputLength = inputString.length;
    for (let i=(inputLength-1); i>=0; i--) {
        newString = newString.concat(inputString[i]);
    }
    return newString;
};

const reverseString = function(inputString) {
    let newString = "";
    const inputLength = inputString.length;
    for (let i=(inputLength-1); i>=0; i--) {
        newString = newString.concat(inputString[i]);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
