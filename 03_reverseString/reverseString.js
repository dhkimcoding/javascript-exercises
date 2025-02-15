const reverseString = function(str) {
    const list = str.split("");
    const reversed = list.reverse();
    const res = reversed.join("");
    return res;
};

// Do not edit below this line
module.exports = reverseString;
