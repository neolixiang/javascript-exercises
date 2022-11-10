const sumAll = function (x, y) {
    if (Number.isInteger(x) && x >= 0 && Number.isInteger(y) && y >= 0) {

        if (x <= y) {
            let sum = x;
            for (let i = 1; i <= y - x; i++) {
                sum += x + i;
            }
            return sum;
        } else {
            let sum = y;
            for (let i = 1; i <= x - y; i++) {
                sum += y + i;
            }
            return sum;
        }
    } else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
