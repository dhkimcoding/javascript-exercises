const sumAll = function(a, b) {
    if (typeof(a) !== 'number' || Math.round(a) !== a) {
        return "ERROR";
    }
    if (typeof(b) !== 'number' || Math.round(b) !== b) {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    if (a > b) {
        let tmp;
        tmp = a;
        a = b;
        b = tmp;
    }
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
