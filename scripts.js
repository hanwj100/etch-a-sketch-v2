const COLOR_CODES = {
    GRAY: "#707070",
    LIGHT_GRAY: "#D8D8D8"

}
const GRID_WIDTH = 100;
const NUM_CELLS = GRID_WIDTH * (GRID_WIDTH * 0.75);

let currentPenPosition = null;
main();


function main() {
    createGrid();
    penRandomStartingPosition();
    window.addEventListener("keydown", () => userControls(window.event.key));
}


function createGrid() {
    const grid = document.querySelector("#grid");

    for (let i = 0; i < NUM_CELLS; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("data-cell-number", `${i}`);
        cell.style.padding = `${grid.style.width / GRID_WIDTH}`;

        grid.appendChild(cell);
    }
}


//sets a random cell as the starting position and colors it in
function penRandomStartingPosition() {
    let startingPosition = Math.floor(Math.random() * (NUM_CELLS - 1));
    colorInCell(startingPosition);
    currentPenPosition = startingPosition;
}


function userControls(key) {
    switch (key) {
        //move left
        case "d":
            if (currentPenPosition % GRID_WIDTH !== 0) {
                currentPenPosition -= 1;
                colorInCell(currentPenPosition);
            }
            break;

        //move right
        case "f":
            if (currentPenPosition % GRID_WIDTH !== 99) {
                currentPenPosition += 1;
                colorInCell(currentPenPosition);
            }
            break;

        //move down
        case "j":
            if (currentPenPosition + GRID_WIDTH < NUM_CELLS) {
                currentPenPosition += GRID_WIDTH;
                colorInCell(currentPenPosition);
            }
            break;

        //move up
        case "k":
            if (currentPenPosition - GRID_WIDTH >= 0) {
                currentPenPosition -= GRID_WIDTH;
                colorInCell(currentPenPosition);
            }
            break;


        case "Backspace":
            resetGrid();
    };
}


function colorInCell(cellNumber) {
    let pen = document.querySelector(`[data-cell-number='${cellNumber}'`);
    pen.style.backgroundColor = COLOR_CODES.GRAY;
}


function resetGrid() {
    let cells = document.querySelectorAll("[data-cell-number]");
    for (let i = 0; i < NUM_CELLS; i++) {
        let cell = cells[i];
        cell.style.backgroundColor = COLOR_CODES.LIGHT_GRAY;
    }
}