const person = {
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'coding', 'traveling'],
};

console.log(person);

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personObject = JSON.parse(personJSON);
console.log(personObject);

const invalidJSON = '{"name": "John Doe"}';
console.log(JSON.parse(invalidJSON)); // SyntaxError: Unexpected end of JSON input