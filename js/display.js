let gridSize = 40;
let gridMargin = 10;
let gridSpace = 3;
let canvasWidth = COLS * gridSize + 2 * gridMargin;
let canvasHeight = ROWS * gridSize + 2 * gridMargin;

let colors = [
    "red",
    "blue",
    "orange",
    "pink",
    "green",
    "purple"
    
];
function translateXY(r,c){
    let x = c * gridSize + gridSize/2 + gridMargin;
    let y = r * gridSize + gridSize/2 + gridMargin;
    return {
        x:x, y:y
    };
}
function drawPlayer(p){
    stroke("white");
    let w = Math.sin(frameCount / 5) * 4 + 3;
    strokeWeight(w);
    
    let coord = translateXY(p.r,p.c);
        fill(colors[p.colorIndex])
        ellipse(coord.x,coord.y,gridSize /2);  
}
function drawBoard(){
    noStroke();
// LOOP THROUGH THE BOARD
for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
        let x = c * gridSize + gridSize/2 + gridMargin;
        let y = r * gridSize + gridSize/2 + gridMargin;

        let cellValue = game.board[r][c];
        fill(colors[cellValue])
        ellipse(x,y,gridSize /2);  
    }
}
} 