const caesar = function(inputString, shift) {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const shiftedCaps = shiftAlphabet(capitalLetters, shift);
    const shiftedLowers = shiftAlphabet(lowerCaseLetters, shift);
    let outputString = "";
    for (let i = 0; i < inputString.length; i++) {
        let capsIndex = capitalLetters.indexOf(inputString[i]);
        let lowersIndex = lowerCaseLetters.indexOf(inputString[i]);
        if (capsIndex !== -1) {
            outputString = outputString + shiftedCaps[capsIndex];
        } else if (lowersIndex !== -1) {
            outputString = outputString + shiftedLowers[lowersIndex];
        } else {
            outputString = outputString + inputString[i];
        }
    }
    return outputString;
};

const shiftAlphabet = function(alphabet, shift) {
    shift = (shift < 26 || shift > 26) ? shift%26 : shift;
    let startsWithA = alphabet.slice(0, shift);
    let endsWithZ = alphabet.slice(shift, 26);
    return endsWithZ + startsWithA;
}

// Do not edit below this line
module.exports = caesar;
