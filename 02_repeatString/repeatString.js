const repeatString = function(str, time) {
    let res = "";
    if (time < 0) return "ERROR";
    for (let i = 0; i < time; i++) {
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
