// CREATE BUTTON FUNCTIONS TO CHANGE ACTIVATION STATES!

// default settings
const DEFAULT_MODE = 'customColor';
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

// global variables
const pickColor = document.getElementById('pickColor');
const customColor = document.getElementById('color');
const rainbowColor = document.getElementById('rainbow');
const clearButton = document.getElementById('clear');
const pickSize = document.getElementById('pick-size');
const sizeSlider = document.getElementById('slider');
const container = document.querySelector('.container'); // main grid container

function changeMode(newMode) { // function to change color mode
    currentMode = newMode;
}

function changeColor(newColor) { // function to change color
    currentColor = newColor;
}

function toColorMode() { // listener for custom color button
    this.classList.add('active');
    rainbowColor.classList.remove('active');
    changeMode('customColor');
}

function pickAColor() {
    let pickedColor = pickColor.value;
    changeColor(pickedColor);
}

function toRainbowMode() { // listener for rainbow button
    this.classList.add('active');
    customColor.classList.remove('active');
    changeMode('rainbowColor');
}

function createGrid () { // function to create dom grid
    for (let i=0; i<16; i++) {
        const grid = document.createElement('div');
        grid.addEventListener('mouseover', updateColor);
        container.appendChild(grid);  
    }
}

function clearGrid () { // listener for clear grid button
    container.innerHTML = '';
    createGrid();
}

function updateColor (e) { // function to color grid black when mouse hovers
    if (currentMode == 'customColor') {
        e.target.style.backgroundColor = currentColor;
    }

    if (currentMode == 'rainbowColor') {
        e.target.style.backgroundColor = createRainbows();
    }
}


customColor.addEventListener('click', toColorMode);
rainbowColor.addEventListener('click', toRainbowMode);
clearButton.addEventListener('click', clearGrid);
pickColor.addEventListener('input', pickAColor);

window.addEventListener('load', toColorMode);
window.addEventListener('load', createGrid);