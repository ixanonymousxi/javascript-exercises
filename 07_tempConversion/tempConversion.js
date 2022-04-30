const ftoc = function (Fahrenheit) {
  return Number(((Fahrenheit - 32) * (5/9)).toFixed(1));

};

const ctof = function(Clesius) {
  return Number(((Clesius * (9/5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
