const etchContainer = document.querySelector('#etchContainer');
const btnContainer = document.querySelector('#btnContainer');
const grid = document.createElement('div');
const standard = document.getElementById("standard");
const gradient = document.getElementById("gradient");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const resize = document.getElementById("resize");

grid.id = "grid";
etchContainer.appendChild(grid);
grid.style.display = 'flex';

let gridSize = 16;
let mode = 'standard';

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
    let backgroundOpacity = 0;
    for (y=0; y < gridSize; y++){
        col = document.createElement('div');
        col.className = "column"
        grid.appendChild(col);
        for (x=0; x < gridSize; x++){
            square = document.createElement('div')
            col.appendChild(square);
            square.className = "square"
            // if (mode === 'gradient'){
            square.style.opacity = backgroundOpacity;
            // } else if (mode === 'standard'){

            // }
        }
    }

    let squares = document.querySelectorAll(".square");

    squares.forEach(item => {item.addEventListener('mouseenter', () => {
        if (mode === 'gradient'){
        if (item.style.opacity < 1){
            item.style.opacity = +item.style.opacity + 0.2;
        }
        } else if(mode === 'standard'){
            item.style.opacity = 1;
        } else if(mode === 'eraser'){
            if (item.style.opacity > 0){
                item.style.opacity = 0;
            }
        }
    })
    }); 

    standard.addEventListener('click', function() {
        mode = 'standard';
        standard.classList.add("selected");
        gradient.classList.remove("selected");
        eraser.classList.remove("selected");
    });

    gradient.addEventListener('click', function() {
        mode = 'gradient';
        gradient.classList.add("selected");
        standard.classList.remove("selected");
        eraser.classList.remove("selected");
    });

    eraser.addEventListener('click', function() {
        mode = 'eraser';
        eraser.classList.add("selected");
        gradient.classList.remove("selected");
        standard.classList.remove("selected");
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