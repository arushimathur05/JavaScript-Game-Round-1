
function keyPressed() {
    console.log("keyPressed keyCode = " + keyCode);

    if (keyCode === LEFT_ARROW) {
        game.player1.c += -1;
    } else if (keyCode === RIGHT_ARROW) {
        game.player1.c += 1;
    } else if (keyCode === DOWN_ARROW) {
        game.player1.r += 1;
    } else if (keyCode === 38) {
        game.player1.r += -1;
    }
    pacman(game.player1);

    calculateScore();
}

function moveEnemy() {
    if (Math.random() > 0.5)
        if (game.player1.c > game.player2.c)
            game.player2.c += 1;
        else
            game.player2.c += 1; // move right
    else
        game.player2.r += 1; // move down

    pacman(game.player2);
    calculateScore();
}
function pacman(p) {
    // when player goes off the screen left
    if (p.c < 0) p.c = COLS - 1;
    // when player goes off the screen top
    if (p.r < 0) p.r = ROWS - 1;

    // when player goes off the screen bottom
    if (p.r == ROWS) p.r = 0;
    // when player goes off the screen right
    if (p.c == COLS) p.c = 0;

    game.board[p.r][p.c] = p.colorIndex;
}



