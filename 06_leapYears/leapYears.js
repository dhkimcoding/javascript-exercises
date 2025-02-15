const leapYears = function(year) {
    let res;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                res = true;
            } else {
                res = false;
            }
        } else {
            res = true;
        }
    } else {
        res = false;
    }
    return res;
};

// Do not edit below this line
module.exports = leapYears;
