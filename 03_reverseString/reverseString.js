const reverseString = function(x) {
    let myArray = x.split("");
    let newString = '';
    for (i = myArray.length - 1; i >= 0; i--) {
        newString += `${myArray[i]}`;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
