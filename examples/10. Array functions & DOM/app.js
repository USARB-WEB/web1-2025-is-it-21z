const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersPushDiv = document.getElementById('numbersPush');
const numbersPopDiv = document.getElementById('numbersPop');
const numbersMapDiv = document.getElementById('numbersMap');
const numbersFilterDiv = document.getElementById('numbersFilter');
const numbersReduceDiv = document.getElementById('numbersReduce');
const numbersSortDiv = document.getElementById('numbersSort');
const numbersSliceDiv = document.getElementById('numbersSlice');
const numbersSpliceDiv = document.getElementById('numbersSplice');
const numbersFindDiv = document.getElementById('numbersFind');
const numbersFindIndexDiv = document.getElementById('numbersFindIndex');

numbersPushDiv.innerHTML = numbers;
numbersPopDiv.innerHTML = numbers;


document.getElementById('pushButton').addEventListener('click', () => {
  numbers.push(Math.floor(Math.random() * 10) + 1);
  numbersPushDiv.innerHTML = numbers;
  numbersPopDiv.innerHTML = numbers;
})

document.getElementById('popButton').addEventListener('click', () => {
  numbers.pop();
  numbersPushDiv.innerHTML = numbers;
  numbersPopDiv.innerHTML = numbers;
})

document.getElementById('mapButton').addEventListener('click', () => {
  numbersMapDiv.innerHTML = numbers.map((number) => {
    return number ** 2;
  });
});

document.getElementById('filterButton').addEventListener('click', () => {
  numbersFilterDiv.innerHTML = numbers.filter((number) => {
    return number % 2 !== 0;
  });
})

document.getElementById('reduceButton').addEventListener('click', () => {
  numbersReduceDiv.innerHTML = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, -55);
});

document.getElementById('sortButton').addEventListener('click', () => {
  numbersSortDiv.innerHTML = numbers.sort((a, b) => {
    return b - a;
  });
});

document.getElementById('sliceButton').addEventListener('click', () => {
  numbersSliceDiv.innerHTML = numbers.slice(1, -1);
});

document.getElementById('spliceButton').addEventListener('click', () => {
  numbersSpliceDiv.innerHTML = numbers.splice(5, 1, [1, 1, 1, 1, 1, 1, 1, ]);
});

document.getElementById('findButton').addEventListener('click', () => {
  numbersFindDiv.innerHTML = numbers.find((number) => {
    return number === 1;
  });
});

document.getElementById('findIndexButton').addEventListener('click', () => {
  numbersFindIndexDiv.innerHTML = numbers.findIndex((number) => {
    return number === 11;
  });
});



