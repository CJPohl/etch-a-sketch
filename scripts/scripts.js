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

function changeSize(newSize) {
    currentSize = newSize;
    clearGrid();
}

function changeColor(newColor) { // function to change color
    currentColor = newColor;
}

function toColorMode() { // listener for custom color button
    activateButton('customColor');
    changeMode('customColor');
}

function pickAColor() { // function to change color
    let pickedColor = pickColor.value;
    changeColor(pickedColor);
}

function toRainbowMode() { // listener for rainbow button
    activateButton('rainbowColor');
    changeMode('rainbowColor');
}

function createRainbows() { // function for random hexcode generator
    let rainbow = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    return rainbow;
}

function createGrid() { // function to create dom grid
    container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    
    for (let i=0; i<(currentSize*currentSize); i++) {
        const grid = document.createElement('div');
        grid.addEventListener('mouseover', updateColor);
        container.appendChild(grid);  
    }
}

function updateSlider() { // function to update size slider
    let sizeValue = sizeSlider.value;
    pickSize.textContent = `${sizeValue} x ${sizeValue}`;
    changeSize(sizeValue);
}

function clearGrid() { // listener for clear grid button
    container.textContent = '';
    createGrid();
}

function updateColor(e) { // function to color grid black when mouse hovers
    if (currentMode == 'customColor') {
        e.target.style.backgroundColor = currentColor;
    }
    if (currentMode == 'rainbowColor') {
        e.target.style.backgroundColor = createRainbows();
    }
}

function activateButton(mode) { // function to add and remove active classes
    if (mode == 'customColor') {
        customColor.classList.add('active');
        rainbowColor.classList.remove('active');
    }
    if (mode == 'rainbowColor') {
        rainbowColor.classList.add('active');
        customColor.classList.remove('active');
    }
}

// onload
window.onload = function() {
    pickColor.addEventListener('input', pickAColor);
    customColor.addEventListener('click', toColorMode);
    rainbowColor.addEventListener('click', toRainbowMode);
    clearButton.addEventListener('click', clearGrid);
    sizeSlider.addEventListener('input', updateSlider);
    activateButton(DEFAULT_MODE);
    createGrid();
}