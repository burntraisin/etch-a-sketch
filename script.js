// ETCH A SKETCH CANVAS

const container = document.querySelector(".grid");

let canvasDimensions = 16; //will grab from user input
let gridUnitSize = "1fr ";
let gridSize = gridUnitSize.repeat(canvasDimensions).trimEnd(); // 1fr per 1 unit of canvasDimensions

container.style.width = "600px";
container.style.height = "600px";
container.style.display = "grid";
container.style.backgroundColor = "pink";
container.style.gridTemplateColumns = gridSize;
container.style.gridTemplateRows = gridSize;

// CHANGE COLOR ON HOVER

// Creates a div for each grid item and changes its color when mouseover
for (let i = 0; i < canvasDimensions * canvasDimensions; i++) {
    const gridChild = document.createElement("div");
    gridChild.classList.toggle("grid-child");
    container.appendChild(gridChild);
    gridChild.addEventListener("mouseover", () => {
        gridChild.classList.toggle("active");
    });
}

// CANVAS SIZE