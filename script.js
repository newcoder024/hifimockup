

const hoverSound = new Audio('audio/hover.mp3');
const clickSound = new Audio('audio/click.mp3');

// wacht tot de DOM helemaal is geladen
document.addEventListener('DOMContentLoaded', () => {
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