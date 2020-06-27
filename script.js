
const etchContainer = document.querySelector('#etchContainer');
const btnContainer = document.querySelector('#btnContainer');
const grid = document.createElement('div');
const clear = document.getElementById("clear");
const resize = document.getElementById("resize");

grid.id = "grid";
etchContainer.appendChild(grid);
grid.style.display = 'flex';

let gridSize = 16;

function clearGrid(){
    while(grid.firstChild){
    grid.removeChild(grid.firstChild)
};
}

function addClear(){
    clear.addEventListener('click', function() {
        clearGrid();
        createGrid();
    });
}

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
    addClear();
}

function runResize(){
    resize.addEventListener('click', () => {
        while (true){
            gridSize = prompt("Enter new square length: ", gridSize)
            if (isNaN(gridSize)){
                alert("Please enter a number");
            }
            else if (gridSize < 0){
                alert("Please enter a positive integer");
            }
            else if (gridSize > 150){
                alert("Cannot run with numbers greater than 150");
            }
            else{
                gridSize = Math.floor(gridSize);
                break;
            }
            continue;
            }   
            clearGrid();
            createGrid();
    });
}

createGrid();
runResize();