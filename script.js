// CANVAS SIZE

const slider = document.querySelector(".slider");
let canvasDimensions = document.querySelector(".slider").value;
slider.onchange = function() {
    canvasDimensions = document.querySelector(".slider").value;
}

// ETCH A SKETCH CANVAS

const container = document.querySelector(".grid");

let gridUnitSize = "1fr ";
let gridSize = gridUnitSize.repeat(canvasDimensions).trimEnd(); // 1fr per 1 unit of canvasDimensions

container.style.width = "600px";
container.style.height = "600px";
container.style.display = "grid";
container.style.backgroundColor = "pink";
container.style.gridTemplateColumns = gridSize;
container.style.gridTemplateRows = gridSize;

slider.addEventListener("click", () => {
    let canvasDimensionsUpdate = document.querySelector(".slider").value;
    let gridUnitSize = "1fr ";
    let gridSize = gridUnitSize.repeat(canvasDimensionsUpdate).trimEnd(); // 1fr per 1 unit of canvasDimensions

    container.style.width = "600px";
    container.style.height = "600px";
    container.style.display = "grid";
    container.style.backgroundColor = "pink";
    container.style.gridTemplateColumns = gridSize;
    container.style.gridTemplateRows = gridSize;

    /* remove.onclick = () => {
        gridChild.classList.remove("active");
    }
 */
    // Creates a div for each grid item and changes its color when mouseover
    for (let i = 0; i < canvasDimensionsUpdate * canvasDimensionsUpdate; i++) {
        const gridChild = document.createElement("div");
        gridChild.classList.add("grid-child");
        container.appendChild(gridChild);
        gridChild.addEventListener("mouseover", () => {
            gridChild.classList.add("active");
        });
    }
});

// CHANGE COLOR ON HOVER

// Creates a div for each grid item and changes its color when mouseover
for (let i = 0; i < canvasDimensions * canvasDimensions; i++) {
    const gridChild = document.createElement("div");
    gridChild.classList.add("grid-child");
    container.appendChild(gridChild);
    gridChild.addEventListener("mouseover", () => {
        gridChild.classList.add("active");
    });
}