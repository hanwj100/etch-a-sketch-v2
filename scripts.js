createGrid();
const grid = document.querySelector("#grid");
let pen = penRandomStartingPosition();
window.addEventListener("keydown", () => movePen(window.event.key));


function createGrid() {
    const grid = document.querySelector("#grid");

    for (let i = 0; i < 7500; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("data-cell-number", `${i}`);
        cell.style.padding = `${grid.style.width / 100}`;

        grid.appendChild(cell);
    }
}

//sets a random cell as the starting position and colors it in
function penRandomStartingPosition() {
    let startingPosition = Math.floor(Math.random() * 7499);
    let pen = document.querySelector(`[data-cell-number='${startingPosition}']`);
    pen.style.backgroundColor = "black";
    return pen;
}


function movePen(key) {
    let newPenPosition;
    switch (key) {
        case "h":
        case "ArrowLeft":
            newPenPosition = pen.dataset.cellNumber - 1;
            colorInCell(newPenPosition);
            break;
        case "j":
        case "ArrowDown":
            newPenPosition = Number(pen.dataset.cellNumber) + 100;
            colorInCell(newPenPosition);
            break;
        case "k":
        case "ArrowUp":
            newPenPosition = pen.dataset.cellNumber - 100;
            colorInCell(newPenPosition);
            break;
        case "l":
        case "ArrowRight":
            newPenPosition = Number(pen.dataset.cellNumber) + 1;
            colorInCell(newPenPosition);
            break;
    };

}

function colorInCell(cell) {
    if (cell >= 0 && cell < 7500) {
        pen = document.querySelector(`[data-cell-number='${cell}'`);
        pen.style.backgroundColor = "black";
    }
}