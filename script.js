function canvas(canvasDimensions) {
    const container = document.querySelector(".grid");

    let gridUnitSize = "1fr ";
    let gridSize = gridUnitSize.repeat(canvasDimensions).trimEnd(); // 1fr per 1 unit of canvasDimensions

    container.style.width = "500px";
    container.style.height = "500px";
    container.style.display = "grid";
    container.style.backgroundColor = "#f5e8d1";
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

const sliderContainer = document.querySelector(".slider-container");
const sliderContent = document.createElement("div");
sliderContent.textContent = canvasDimensions + " x " + canvasDimensions;
sliderContainer.insertBefore(sliderContent, slider);

slider.onmousemove = function() {
    let canvasDimensions = document.querySelector(".slider").value;
    sliderContent.textContent = canvasDimensions + " x " + canvasDimensions;
}

slider.onchange = function() {
    let canvasDimensions = document.querySelector(".slider").value;
    canvas(canvasDimensions);
}

const clear = document.querySelector(".clear");
clear.addEventListener ("click", () => {
    let canvasDimensions = document.querySelector(".slider").value;
    canvas(canvasDimensions);
})