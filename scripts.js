const COLOR_CODES = {
    GRAY: "#707070",
    LIGHT_GRAY: "#D8D8D8"

}

let currentPenPosition = null;
main();

function main() {
    createGrid();
    penRandomStartingPosition();
    window.addEventListener("keydown", () => userControls(window.event.key));
}


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
    colorInCell(startingPosition);
    currentPenPosition = startingPosition;
}


function userControls(key) {
    switch (key) {
        case "h":
        case "ArrowLeft":
            if (currentPenPosition % 100 !== 0) {
                currentPenPosition -= 1;
                colorInCell(currentPenPosition);
            }
            break;

        case "j":
        case "ArrowDown":
            if (currentPenPosition + 100 < 7500) {
                currentPenPosition += 100;
                colorInCell(currentPenPosition);
            }
            break;

        case "k":
        case "ArrowUp":
            if (currentPenPosition - 100 >= 0) {
                currentPenPosition -= 100;
                colorInCell(currentPenPosition);
            }
            break;

        case "l":
        case "ArrowRight":
            if (currentPenPosition % 100 !== 99) {
                currentPenPosition += 1;
                colorInCell(currentPenPosition);
            }
            break;

        case " ":
            resetGrid();
    };
}


function colorInCell(cellNumber) {
    let pen = document.querySelector(`[data-cell-number='${cellNumber}'`);
    pen.style.backgroundColor = COLOR_CODES.GRAY;
}


function resetGrid() {
    let cells = document.querySelectorAll("[data-cell-number]");
    for (let i = 0; i < 7500; i++) {
        let cell = cells[i];
        cell.style.backgroundColor = COLOR_CODES.LIGHT_GRAY;
    }
}