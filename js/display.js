let gridSize = 40;
let gridMargin = 10;
let gridSpace = 3;
let scoreHeight = 30;
let canvasWidth = COLS * gridSize + 2 * gridMargin + (COLS - 1) * gridSpace;
let canvasHeight = ROWS * gridSize + 2 * gridMargin + (COLS - 1) * gridSpace + scoreHeight;

let colors = [
    "white",
    "violet",
    "cyan",
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

function drawScore(){
    noStroke();
    fill("white");
    textSize(18);
    let s1 = 'player 1: ' + game.score.player1;
    textAlign(LEFT);
    text(s1, gridMargin, canvasHeight - scoreHeight + 11);

    let s2 = 'player 2: ' + game.score.player2;
    textAlign(RIGHT);
    text(s2, canvasWidth - gridMargin, canvasHeight - scoreHeight + 11);
}