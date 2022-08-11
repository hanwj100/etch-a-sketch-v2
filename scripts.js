createGrid();

function createGrid() {
    const grid = document.querySelector("#grid");

    for(let i = 0; i < 7500; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell${i}`;
        cell.style.padding = `${grid.style.width/100}`;

        grid.appendChild(cell);
    }
}