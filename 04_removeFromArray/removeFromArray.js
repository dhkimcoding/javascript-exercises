const removeFromArray = function(list1, ...list2) {
    const deleteIndex = [];
    for (let i = 0; i < list2.length; i++) {
        for (let j = 0; j < list1.length; j++) {
            if (list2[i] === list1[j]) {
                deleteIndex.push(j);
            }
        }
    }
    const res = [];
    for (let i = 0; i < list1.length; i++) {
        if (deleteIndex.includes(i)) continue;
        res.push(list1[i]);
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
