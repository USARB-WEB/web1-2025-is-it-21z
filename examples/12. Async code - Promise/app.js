// console.log('Start');


// setTimeout(() => {
//     console.log('3 seconds timer');
// }, 3000);

// console.log('Middle');

// setTimeout(() => {
//     console.log('2 seconds timer');
// }, 2000);


// console.log('End');


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data back from server');
    }, 3000);

    setTimeout(() => {
        reject('No data back from server. Error');
    }
    , 2000);

    
    // reject('No data back from server. Error');
    // resolve('Data back from server');
})

promise.then((data) => {
    console.log(`Data: ${data}`);
}).catch((error) => {
    console.log(`Error: ${error}`);
}).finally(() => {
    console.log('Promise done');
})