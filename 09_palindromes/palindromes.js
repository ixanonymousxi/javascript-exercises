const palindromes = function (string) {
    const newString = string.toLowerCase();
    let arr = newString.split("");

    let filteredArr = arr.filter((letter) => {
        if(letter.match(/[a-z]/i)){
            return true;
        };
    });

    let origDirection = filteredArr.join('');
    let reverseDirection = filteredArr.reverse().join('');

    return (origDirection === reverseDirection);
};

// Do not edit below this line
module.exports = palindromes;
