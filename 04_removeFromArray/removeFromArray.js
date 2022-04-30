const removeFromArray = function (array, ...args) {
    let newArr = array;

    for (let i = 0; i < args.length; i++) {
        newArr = newArr.filter(arrayItem => arrayItem !== args[i]);
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
