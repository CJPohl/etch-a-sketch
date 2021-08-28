const container = document.querySelector('.container'); // main container
const divList = []; // node list
function createBoxes () { // function to create dom boxes
    for (let i=0; i<16; i++) {
        divList[i] = document.createElement('div');
        container.appendChild(divList[i]);  
    }
}


createBoxes();
divList.forEach(divList => divList.classList.add('item')); // add styling class to DOM boxes
