const mark1 = 9;
const mark2 = 8;
const mark3 = 7;
const mark4 = 6;
const mark5 = 5;

let average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;

console.log(`The average is ${average}`);

const marks = [8, 5, 10, 7, 8];

marks.push(4);
marks.push(9);

console.log(marks);

average = marks.reduce((acc, mark) => acc + mark, 0) / marks.length;
console.log(`The average is ${average}`);


/// Arrays
console.log('Empty array');
const emptyArray = [];
console.log(emptyArray);

console.log('Array with values');
const arrayWithValues = [1, 2, 3, 4, 5];
console.log(arrayWithValues);

console.log('Array with different types of values');
const arrayWithDifferentTypes = [1, 'two', 3, 'four', 5, false, [], undefined, null, {}];
console.log(arrayWithDifferentTypes);

const numbers = [1, 2, 3, 4, 5];

console.log('For loop');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log('While loop');
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

console.log('Do while loop');
i = 0;
do {
  console.log(numbers[i]);
  i++;
} while (i < numbers.length);

console.log('For of loop');
for (const number of numbers) {
  console.log(number);
}

console.log('For in loop');
for (const index in numbers) {
  console.log(numbers[index]);
}

console.log('For each loop');
numbers.forEach((number) => {
  console.log(number);
});

