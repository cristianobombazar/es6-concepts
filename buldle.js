"use strict";

var arr = [1, 3, 4, 5, 8, 9, 10];
var result = arr.map(function (item, index) {
  return item * index;
});
console.log(result);
var reduced = arr.reduce(function (total, next) {
  return total + next;
});
console.log(reduced);
var filtered = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filtered);
var find = arr.filter(function (item) {
  return item === 2;
});
console.log(find);
