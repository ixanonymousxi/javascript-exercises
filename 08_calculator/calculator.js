const add = function(...args) {
  const nums = [...args];
  return nums.reduce((prevVal,nextVal) => prevVal + nextVal);
};

const subtract = function (...args) {
  const nums = [...args];
  return nums.reduce((prevVal, nextVal) => prevVal - nextVal);	
};

const sum = function (...args) {
	const arr = args[0];

  if(arr.length === 0){
    return 0;
  }

  return arr.reduce((prevVal, nextVal) => prevVal + nextVal);

};

const multiply = function (...args) {
  const nums = args[0];
  return nums.reduce((prevVal, nextVal) => prevVal * nextVal);
};

const power = function (...args) {
  let sum = args[0];
  for(let i = 1; i < args[1]; i++){
    sum *= args[0];
  }
	return sum;
};

const factorial = function(num) {
  if(num === 0){return 1}
  
  let sum = 1;
	for(let i = 1; i <= num ; i++){
    sum *= i; 
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
