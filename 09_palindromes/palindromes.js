const palindromes = function (text) {
    let lowerText = text.toLowerCase();
    let clean_p = lowerText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let clean_ps = clean_p.replace(/\s/g, '');
    let charArray = clean_ps.split('');
    let output = '';
    for (let i = 1; i <= charArray.length; i++) {
        output += charArray[charArray.length - i]
    }
    return output === clean_ps;
};

// Do not edit below this line
module.exports = palindromes;
