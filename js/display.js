let gridSize = 40;
let canvasWidth = COLS * gridSize;
let canvasHeight = ROWS * gridSize;

let colors = [
    "red",
    "blue",
    "orange",
    "pink",
    "green"
];

// for {c:0, r:0} => {x:0, y:0}
// for {c:5, r:1} => {x:200, y:40}

function drawBoard(){
    // LOOP THROUGH THE BOARD
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let x = c * gridSize;
            let y = r * gridSize;
            
            
            // if (cellValue == 0) fill(colors[0]);
            // if (cellValue == 1) fill(colors[1]);
            // if (cellValue == 2) fill(colors[2]);
            
            // only type these lines
            let cellValue = game.board[r][c];
            fill(colors[cellValue]);

            ellipse(x,y,gridSize /2);
        }
    }
}