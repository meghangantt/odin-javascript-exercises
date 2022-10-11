const sumAll = function(a, b) {
    if (a >= 0 && b >= 0 && typeof a == 'number' && typeof b == 'number') {
        let sum = 0;
        let lowerVal = (a < b) ? a : b;
        let higherVal = (a > b) ? a : b;
        for (lowerVal; lowerVal <= higherVal; lowerVal++) {
            sum += lowerVal;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
