

const hoverSound = new Audio('audio/hover.mp3');
const clickSound = new Audio('audio/click.mp3');
let calcWindow;
let lastCalc

function clearSom(){ // clears calc window
    calcWindow.innerText = "";
} 

function getNumber(num){ // adds number/operator to innertext
    const operators = ['+', '-', '*', '/', '%', '.'];
    let current = calcWindow.innerText;
    if (current.length === 0 && (operators.includes(num) || num === '.'))  {
        // Prevent operators or decimal point as the first input
        return;
    }
    if (current.length > 0 && operators.includes(current.slice(-1)) && operators.includes(num)) {
        // Prevent consecutive operators
        return;
    }
    calcWindow.innerText += num;
}

function deleteNum(){ // delete last character
    let current = calcWindow.innerText;
    calcWindow.innerText = current.slice(0, -1);
}

function calculate(){ // evaluates the calculation
    try {
        lastCalc.innerText = eval(calcWindow.innerText);
        clearSom()
    } catch (e) {
        lastCalc.innerText = "Error";
    }
}

// waits for DOM to load so you can hear sounds
document.addEventListener('DOMContentLoaded', () => {
    calcWindow = document.getElementById("windowval");
    lastCalc = document.getElementById("result")

    // Target the outer interactive elements so we only play once per hover
    const buttons = document.querySelectorAll('.button, .small-button, .round-button');
    buttons.forEach(button => {
        // use mouseenter to avoid bubbling/multiple events when entering child elements
        button.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
        button.addEventListener('click', () => {
            clickSound.currentTime = 0;
            clickSound.play();
        });
    });
});