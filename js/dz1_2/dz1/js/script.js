function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("enter the number to be raised to the power", '');
var n = prompt("enter the extent to which you want to raise the number of?", '');

if (n <= 1) {
  alert('Exponent ' + n +
    'is not supported, enter the integer power greater than 1'
  );
} else {
  console.log( pow(x, n) );
}


