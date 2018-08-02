let game = {
    score: 0,
    isRunning: false,
    player: {},
    enemy: {},
    board: [
        [4,0,0,1,0,0],
        [0,0,0,0,2,0],
        [0,3,3,0,0,0],
        [0,3,0,0,4,0],
        [0,0,0,1,0,0],
        [0,0,0,0,0,0]
    ]
};

// setup the board
const __ = 0;
const P1 = 1;
const P2 = 2;
const SPONGE = 3;
const WALL = 4;

const ROWS = 6;
const COLS = 6;