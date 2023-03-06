const container = document.querySelector(".grid");
let widthValue = 16;

function createCanvas(widthValue) {
    for (let i = 0; i < widthValue; i += 1) {
        const div = document.createElement("div");
        div.style.backgroundColor = "black";
        div.style.width = "10px";
        div.style.height = "10px";
        container.appendChild(div);
    }
}

createCanvas(widthValue);