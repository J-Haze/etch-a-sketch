
const etchContainer = document.querySelector('#etchContainer');
const btnContainer = document.querySelector('#btnContainer');
const grid = document.createElement('div')

grid.id = "grid";
etchContainer.appendChild(grid);
grid.style.display = 'flex';

let gridSize = 16;

function createGrid(){
    for (y=0; y < gridSize; y++){
        col = document.createElement('div');
        col.className = "column"
        grid.appendChild(col);
        for (x=0; x < gridSize; x++){
            square = document.createElement('div')
            col.appendChild(square);
            square.className = "square"
        }
    }

    let squares = document.querySelectorAll(".square");

    squares.forEach(item => {item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = 'black'; })
    }); 

}
createGrid();

document.getElementById("clear").addEventListener('click', () => {
    window.location.reload(true);
});



