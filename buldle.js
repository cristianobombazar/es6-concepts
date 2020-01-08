"use strict";

var user = {
  name: 'Cristiano Bombazar',
  age: 25,
  address: {
    city: 'Braço do Norte',
    state: 'Santa Catarina'
  }
};
var name = user.name,
    age = user.age,
    city = user.address.city;
console.log(name);
console.log(age);
console.log(city);

function showName(user) {
  console.log(user.name);
}

function showNameAsParameter(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name);
  console.log(age);
}

showName(user);
showNameAsParameter(user);
