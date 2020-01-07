const arr = [1, 3 ,4, 5, 8, 9, 10];
const result = arr.map(function (item, index) {
    return item * index;
});
console.log(result);

const reduced = arr.reduce(function (total, next) {
    return total + next;
});
console.log(reduced);

const filtered = arr.filter(function (item) {
    return item % 2 === 0;
});
console.log(filtered);

const find = arr.filter(function (item) {
    return item === 2;
});
console.log(find);