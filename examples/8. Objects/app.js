const student = [
  "Ion Creanga",
  20,
  "Moldova",
  "Chisinau",
  "str. Stefan cel Mare",
  8,
  9,
  10,
  "+37377777777",
  10999
]

console.log(student);
student[9] = 15000
console.log(student);

const studentObject = {
  name: "Ion Creanga",
  age: 20,
  country: "Moldova",
  city: "Chisinau",
  street: "str. Stefan cel Mare",
  marks: [8, 9, 10],
  phone: "+37377777777",
  salary: 10999
}

studentObject.salary = 15000

console.log(studentObject);