"use strict";

var arr = [1, 3, 4, 5, 6];
var result = arr.map(function (item) {
  return item * 2;
});
console.log(result);

var test = function test() {
  return {
    name: "Cristiano"
  };
};

console.log(test());
