"use strict";

// function sum(a = 3, b = 6) {
//     return a + b;
// }
var sum = function sum() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(sum(1));
console.log(sum(2));
