// f(x) = a * x^2 + b * x + c

function f(a, b, c) {
  let x1 = undefined;
  let x2 = undefined;

  const D = b ** 2 - 4 * a * c;

  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
  } else if (D === 0) {
    x1 = -b / (2 * a);
    x2 = x1;
  } else {
    x1 = undefined;
    x2 = undefined;
  }

  return {
    x1,
    x2
  };
}

console.log(f(1, 2, 3)); 
console.log(f(1, 4, 4));
console.log(f(1, 5, 6));
console.log(f(1, 6, 9));
console.log(f(1, 7, 12));
console.log(f(1, 8, 15));
console.log(f(1, 9, 18));

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));


const square = (a) => a ** 2;

console.log(square(5));