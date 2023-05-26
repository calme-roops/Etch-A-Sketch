// Function to create a nXn grid
const container = document.getElementById('container');
const newGridButton = document.querySelector(".grid-button");
let n = 16;

function makeGrid(n) {
    container.style.setProperty('--grid-rows', n);
    container.style.setProperty('--grid-cols', n);
    for (i = 0; i < (n * n) ; i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = "grid-item";
    };

    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = randomHsl();
    });
}

makeGrid(n);

// Button to prompt for user to get the size of grid
function clearGrid() {
    for (i = 0; i < (n * n); i++) {
        let square = document.querySelector(".grid-item");
        container.removeChild(square);
    }
    n = prompt("How many squares on each side of new grid?");
    n = Number(n);

    if (Number.isInteger(n) && (n > 0) && (n < 100)) {
        makeGrid(n);
    } else {
        alert("Please enter an integer between 0 and 100");
        n = 1;
        makeGrid(n);
    }
}

newGridButton.addEventListener('click', clearGrid)


//Function to choose random hsla value
function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}