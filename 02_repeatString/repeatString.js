const repeatString = function(x, y) {
    let output = '';
    for (let i = 0; i < y; i++) {
        output += `${x}`;
    }
    if (y < 0) {
        output += `ERROR`;
    }
    return output;
    
};

// Do not edit below this line
module.exports = repeatString;
