const x = 10;
const y = 10;

console.log(x > y); // false
console.log(x >= y); // true
console.log(x < y); // false
console.log(x <= y); // true
console.log(x === y); // true
console.log(x !== y); // false
console.log(x == y); // true
console.log(x != y); // false

const a = '10';
const b = 10;

console.log(a > b); // false
console.log(a >= b); // true
console.log(a < b); // false
console.log(a <= b); // true
console.log(a === b); // false
console.log(a !== b); // true
console.log(a == b); // true
console.log(a != b); // false


console.log("---------------------");
console.log(false == 0); // true
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log(false == null); // false
console.log(false == undefined); // false
console.log(true == 0); // false


console.log(false === 0)