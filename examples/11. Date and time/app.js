document.getElementById('currentTime').innerHTML = new Date();

const today = new Date();

// Extract day, month, and year
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

// Add leading zero to day and month if needed
day = day.toString().padStart(2, '0');
month = month.toString().padStart(2, '0');

// Format the date as dd.mm.yyyy
const formattedDate = `${day}.${month}.${year}`;

document.getElementById('currentDate').innerHTML = formattedDate;

const birthday = new Date('2004-11-28');

// Calculate the difference in milliseconds
const difference = today - birthday;

document.getElementById('age').innerHTML = difference / 1000 / 60 / 60 / 24 / 365.25;


setInterval(() => {
  const now = new Date();
  document.getElementById('dateTime').innerHTML = now;
}, 1000);