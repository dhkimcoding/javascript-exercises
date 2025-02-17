const fibonacci = function(num) {
    num = +num;
    if (num === 0) return 0;
    if (num < 0) return "OOPS";
    if (num === 1 || num === 2) return 1;
    const fibo = [1, 1];
    let idx = 0;
    while (idx <= num-1) {
        fibo.push(fibo[idx] + fibo[idx+1]);
        idx++;
    }
    return fibo[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
