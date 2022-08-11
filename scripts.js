createGrid();
const grid = document.querySelector("#grid");
window.addEventListener("keydown", () => movePen(window.event.key));

function createGrid() {
    const grid = document.querySelector("#grid");

    for(let i = 0; i < 7500; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("cell-number", `${i}`);
        cell.style.padding = `${grid.style.width/100}`;

        grid.appendChild(cell);
    }
}

function movePen(key) {
    switch (key) {
        case "h":
        case "ArrowLeft":
            console.log("left");
            break;
        case "j":
        case "ArrowDown":
            console.log("down");
            break;
        case "k":
        case "ArrowUp":
            console.log("up");
            break;
        case "l":
        case "ArrowRight":
            console.log("right");
            break;
    };
    
}