const fibonacci = function(num) {
    const intNum = parseInt(num);

    if (intNum < 1){return "OOPS"}

    let seq = [1,1];

    while (seq.length < intNum){
        let secLastNum = seq[seq.length - 2];
        let lastNum = seq[seq.length - 1];

        seq.push(secLastNum + lastNum);
    }

    return seq[intNum-1];
};

// Do not edit below this line
module.exports = fibonacci;
