const sumAll = function(num1,num2) {
    if (typeof num1 !== "number" || num1 < 0 || typeof num2 !== "number" || num2 < 0){
        return "ERROR";
    }

    let sum = num1 < num2 ? num1 : num2;
    const largeNum = num1 < num2 ? num2 : num1;
    for (let i = sum + 1; i <= largeNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
