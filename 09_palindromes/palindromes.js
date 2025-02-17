const palindromes = function (str) {
    const allLetter = str.toLowerCase().split("");
    const onlyAlpha = allLetter.filter((ch) => (ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9"));
    let ok = true;
    for (let i = 0; i < onlyAlpha.length / 2; i++) {
        if (onlyAlpha[i] !== onlyAlpha[onlyAlpha.length-1-i]) {
            ok = false;
            break;
        }
    }
    return ok;
};

// Do not edit below this line
module.exports = palindromes;
