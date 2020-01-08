import defaultSum, {sum as name, sub} from './functions';
import sumFromFile from './sum';
import * as functions from './functions';

console.log(name(1, 3));
console.log(defaultSum(1, 3));
console.log(sub(3, 1));
console.log(sumFromFile(3, 1));
console.log(functions.sub(1, 3));