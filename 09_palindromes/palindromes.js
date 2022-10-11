const palindromes = function (string) {
    string = string.replace(/[^0-9a-z]/gi, '');
    string = string.replace(' ', '');
    string = string.toLowerCase();
    return string===reverseString(string);
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
module.exports = palindromes;
