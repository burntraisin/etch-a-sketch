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