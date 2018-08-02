
function keyPressed() {
    console.log("keyPressed keyCode = " + keyCode);

    if (keyCode === LEFT_ARROW) {
        game.player.c += -1;
    } else if (keyCode === RIGHT_ARROW) {
        game.player.c += 1;
    } else if (keyCode === DOWN_ARROW) {
        game.player.c += 1;
    } else if (keyCode === 38) {
        game.player.c += -1;
    }
}