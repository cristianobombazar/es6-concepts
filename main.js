const user = {
    name: 'Cristiano Bombazar',
    age: 25,
    address: {
        city: 'Braço do Norte',
        state: 'Santa Catarina'
    }
};

const {name, age, address: {city}} = user;
console.log(name);
console.log(age);
console.log(city);

function showName(user) {
    console.log(user.name);
}

function showNameAsParameter({name, age}) {
    console.log(name);
    console.log(age);
}

showName(user);
showNameAsParameter(user);