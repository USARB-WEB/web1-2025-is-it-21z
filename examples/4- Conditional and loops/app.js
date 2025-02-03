// Hardcoded values
console.log('Hardcoded values')
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
console.log(13)
console.log(14)
console.log(15)

// Loops FOR
console.log('Loops FOR')
for (let i = 1; i <= 15; i++) {
  console.log(i)
}

// Loops WHILE
console.log('Loops WHILE')
let i = 1;
while ( i <= 15) {
  console.log(i)
  i++
}

// Loops DO WHILE
console.log('Loops DO WHILE')
i = 1;
do {
  console.log(i)
  i++
}while ( i <= 15)


// Loops WHILE
console.log('Difference between WHILE and DO WHILE')
console.log('Loops WHILE')

let number = 10;
while(number < 10) {
  console.log(number);
  number++;
}

number = 10;
console.log('Loops DO WHILE')
do {
  console.log(number);
  number++;
}while ( number < 10)


// Conditional IF
console.log('Conditional IF')
let age = 18;
if (age >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are a minor');
}

// Condditional SWITCH CASE

console.log('Condditional SWITCH CASE')

const dayNumber = prompt('Enter a number between 1 and 7');

if(dayNumber == 1){
  console.log('Monday');
} else if(dayNumber == 2){
  console.log('Tuesday');
} else if(dayNumber == 3){
  console.log('Wednesday');
} else if(dayNumber == 4){
  console.log('Thursday');
} else if(dayNumber == 5){
  console.log('Friday');
} else if(dayNumber == 6){
  console.log('Saturday');
} else if(dayNumber == 7){
  console.log('Sunday');
} else {
  console.log('Invalid day');
}

switch(dayNumber){
  case '1':
    console.log('Monday');
    break;
  case '2':
    console.log('Tuesday');
    break;
  case '3':
    console.log('Wednesday');
    break;
  case '4':
    console.log('Thursday');
    break;
  case '5':
    console.log('Friday');
    break;
  case '6':
    console.log('Saturday');
    break;
  case '7':
    console.log('Sunday');
    break;
  default:
    console.log('Invalid day');
    break;
}
