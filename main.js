//REST OPERATOR

const user = {
    name: "Cristiano Bombazar",
    age: 23,
    company: 'DWF Sistemas'
};

const {name, ...rest} = user;
console.log(name);
console.log(rest);

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function sum(...params) {
    return params.reduce((total, next) => total + next);
}

function sum2(a, b, ...params) {
    return params;
}

console.log(sum(1, 3, 4))
console.log(sum2(1, 3, 4))


// SPREAD OPERATOR

const spreadArr = [1, 2, 3];
const spreadArr2 = [4, 5, 6];
const spreadArr3 = [...spreadArr, ...spreadArr2];
console.log(spreadArr3);

const user2 = {
    name: 'Cristiano Bombazar',
    age: 25
};
console.log(user2);

const newUser = {...user2, name: 'Nicolas'};
console.log(newUser);