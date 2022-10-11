const repeatString = function(inputString, reps) {
    let newString = '';
    if (reps < 0) {
        newString = 'ERROR';
    } else { 
        for (let i=0; i < reps; i++) {
        newString = newString.concat(inputString);
        }
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
