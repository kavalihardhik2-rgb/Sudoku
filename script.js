document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById("sudoku-board");

    const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

function createBoard() {
    boardElement.innerHTML = "";

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;

            if (puzzle[row][col] !== 0) {
                input.value = puzzle[row][col];
                input.disabled = true;
                cell.classList.add("prefilled");
            } else {
                input.addEventListener("input", () => {
                    validateInput(input, row, col);
                });
            }

            cell.appendChild(input);
            boardElement.appendChild(cell);
        }
    }
}

function validateInput(input, row, col) {
    const value = input.value;

    if (!/^[1-9]$/.test(value)) {
        input.value = "";
        return;
    }

    input.parentElement.classList.remove("invalid");

    if (!isValid(row, col, value)) {
        input.parentElement.classList.add("invalid");
    }
}

function isValid(row, col, value) {
    const cells = document.querySelectorAll(".cell input");

    // Row check
    for (let c = 0; c < 9; c++) {
        if (c !== col && cells[row * 9 + c].value == value) {
            return false;
        }
    }

    // Column check
    for (let r = 0; r < 9; r++) {
        if (r !== row && cells[r * 9 + col].value == value) {
            return false;
        }
    }

    // 3x3 box check
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
            if ((r !== row || c !== col) &&
                cells[r * 9 + c].value == value) {
                return false;
            }
        }
    }

    return true;
}

    function resetBoard() {
        createBoard();
    }

    // attach reset button handler
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', resetBoard);

    createBoard();
});