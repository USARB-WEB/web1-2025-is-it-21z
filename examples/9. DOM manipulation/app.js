document.body.style.backgroundColor = 'red';

document.getElementById('welcome-message').innerHTML = 'Hello, World!';

document.getElementById('clickMeButton').addEventListener('click', () => {
    document.getElementById('welcome-message').style.color = 'blue';
})


document.getElementById('saveNameButton').addEventListener('click', () => {
    document.getElementById('welcomeUser').innerHTML = `Welcome, ${document.getElementById('nameInput').value}!`;
})

document.getElementById('studentName').addEventListener('input', () => {
    const studentName = document.getElementById('studentName').value;
    document.getElementById('inversedName').innerHTML = studentName.split('').reverse().join('');
})

setTimeout(() => {
    document.body.style.backgroundColor = '#ffff00';
}, 3000)


const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
let colorIndex = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 100000)


document.addEventListener('keydown', (event) => {
    const mario = document.getElementById('mario');
    if (event.key === 'ArrowRight') {
        const currentLeftPosition = parseInt(mario.style.left) || 0
        mario.style.left = `${currentLeftPosition + 10}px`;
        mario.style.transform = 'scaleX(1)';
    } else if (event.key === 'ArrowLeft') {
        const currentLeftPosition = parseInt(mario.style.left) || 0
        mario.style.left = `${currentLeftPosition - 10}px`;
        mario.style.transform = 'scaleX(-1)';
    }
})