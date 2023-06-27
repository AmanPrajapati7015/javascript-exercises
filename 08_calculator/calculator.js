const add = function(a, b) {
  return (+a)+(+b);
};

const subtract = function(a, b ) {
  return (a)-(b);
};

const sum = function(array) {
	return array.reduce((p, c)=>p+c, 0);
};

const multiply = function() {
  nos = Array.from(arguments);
  return nos.reduce((p, c)=>p*c, 1);
};

const power = function(a, b) {
  return (a)**(b);
};

const factorial = function(n) {
  let fact = 1;
  for (let i = 1; i<= n;i++){
    fact *=i 
  }
  return fact;
	
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
