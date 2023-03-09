function canvas(canvasDimensions) {
    const container = document.querySelector(".grid");

    let gridUnitSize = "1fr ";
    let gridSize = gridUnitSize.repeat(canvasDimensions).trimEnd(); // 1fr per 1 unit of canvasDimensions

    container.style.width = "600px";
    container.style.height = "600px";
    container.style.display = "grid";
    container.style.backgroundColor = "pink";
    container.style.gridTemplateColumns = gridSize;
    container.style.gridTemplateRows = gridSize;

    // Creates a div for each grid item and changes its color when mouseover
    for (let i = 0; i < canvasDimensions * canvasDimensions; i++) {
        const gridChild = document.createElement("div");
        gridChild.classList.add("grid-child");
        container.appendChild(gridChild);
        gridChild.addEventListener("mouseover", () => {
            gridChild.classList.add("active");
        });
    }

    // Clears previous painting when changing canvas size
    const activeGridChild = document.querySelectorAll(".grid-child");
    activeGridChild.forEach((gridChild) => {
        gridChild.classList.remove("active");
    });

}

const slider = document.querySelector(".slider");
let canvasDimensions = document.querySelector(".slider").value;
canvas(canvasDimensions);

slider.onchange = function() {
    let canvasDimensions = document.querySelector(".slider").value;
    canvas(canvasDimensions);
}