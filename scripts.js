createGrid();
let penPosition;

penRandomStartingPosition();
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
    penPosition = startingPosition;
}


function movePen(key) {
    switch (key) {
        case "h":
        case "ArrowLeft":
            if (penPosition % 100 !== 0) {
                penPosition -= 1;
                colorInCell(penPosition);
            }
            break;
        case "j":
        case "ArrowDown":
            if (penPosition + 100 < 7500) {
                penPosition += 100;
                colorInCell(penPosition);
            }
            break;
        case "k":
        case "ArrowUp":
            if (penPosition - 100 >= 0) {
                penPosition -= 100;
                colorInCell(penPosition);
            }
            break;
        case "l":
        case "ArrowRight":
            if (penPosition % 100 !== 99) {
                penPosition += 1;
                colorInCell(penPosition);
            }
            break;
    };

}

function colorInCell(cell) {
    if (cell >= 0 && cell < 7500) {
        let pen = document.querySelector(`[data-cell-number='${cell}'`);
        pen.style.backgroundColor = "black";
    }
}
