const removeFromArray = function (myArray, a = '', b = '', c = '', d = '') {

    const index_a = myArray.indexOf(a);
    if (index_a > -1) {
        myArray.splice(index_a, 1);
    }
    const index_b = myArray.indexOf(b);
    if (index_b > -1) {
        myArray.splice(index_b, 1);
    }
    const index_c = myArray.indexOf(c);
    if (index_c > -1) {
        myArray.splice(index_c, 1);
    }
    const index_d = myArray.indexOf(d);
    if (index_d > -1) {
        myArray.splice(index_d, 1);
    }
    return myArray;

};

// Do not edit below this line
module.exports = removeFromArray;
