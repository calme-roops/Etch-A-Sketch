// Function to create a nXn grid

function makeGrid(n) {
    for (let i = 0; i < n; i++) {
        const container = document.getElementById('container');
        const row = document.createElement('div')
        row.classList.add('grid-parent')
        container.appendChild(row)
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('div')
            cell.classList.add('grid')
            row.appendChild(cell)
        }
        
    }
    var gridChange = document.querySelectorAll('.grid')
    gridChange.forEach(box => box.addEventListener('mouseover', () => {
        box.classList.add('grid-change')
}))
}

