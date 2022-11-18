const fibonacci = function(a) {
    const x = a * 1;
    if (x <= 0) {
        return 'OOPS';
    }
    if (x === 1) {
        return 1;
    }
    theArray = [0, 1];
    for (let i = 2; i <= x; i++) {
        toPush = theArray[i-2] + theArray[i-1];
        theArray.push(toPush)
    }
    return theArray[x];
};

// Do not edit below this line
module.exports = fibonacci;
