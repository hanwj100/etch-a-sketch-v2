createGrid();
const grid = document.querySelector("#grid");
grid.addEventListener("")

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

    
}