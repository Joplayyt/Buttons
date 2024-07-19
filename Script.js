// Load sounds
const clickSound1 = new Audio('sounds/click1.mp3');
const clickSound2 = new Audio('sounds/click2.mp3');

// Add event listeners to buttons
document.getElementById('button1').addEventListener('click', () => {
    clickSound1.play();
    animateButton('button1');
});

document.getElementById('button2').addEventListener('click', () => {
    clickSound2.play();
    animateButton('button2');
});

function animateButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 200);
}
