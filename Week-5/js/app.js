class Player {
    constructor(name, XorO) {
        this.name = name;
        this.XorO = XorO.toUpperCase(); 
        this.currentMove = false;
    }
} 

class PlayGame {
    constructor(board) {
        this.players = [];
        this.currentMoveCount = 1;
        this.currentBoard = board;
    }
    startGame () {
        // create players
        const p1 = new Player(prompt('Player 1 name?'), prompt('X or O?'));
        const p2 = new Player(prompt('Player 2 name?'), prompt('X or O?'));
        this.players.push(p1);
        this.players.push(p2);

        // set initial turn 
        for ( let p of this.players ) {
            p.XorO === 'X' ? p.currentMove = true : p.currentMove = false; // ternary operators = if else statements 
            // 1st part is conditional ? if true do something : if false do something 
            if ( p.currentMove === true ) {
                h2.innerText = `It's ${p.name}'s turn`
            }
        }
    }
    setPlayerTurn () {
        for ( let p of this.players ) {
            p.currentMove === false ? p.currentMove = true : p.currentMove = false;
            if ( p.currentMove === true ) {
                h2.innerText = `It's ${p.name}'s turn`
            }
        }
    }
}

const gameState = new Map([ // key: value 
    ['sq1', ''], // sql1 is the key and the value is set to '' right now
    ['sq2', ''],
    ['sq3', ''],
    ['sq4', ''],
    ['sq5', ''],
    ['sq6', ''],
    ['sq7', ''],
    ['sq8', ''],
    ['sq9', '']
])

// add event listeners to game board
const divContainer = document.getElementById("main"); // set for the bootstrap container
const h2 = document.getElementById("player-turn");

// get game started
const game = new PlayGame(gameState);
game.startGame();


divContainer.addEventListener('click', (evt) => {//evt represents the "event" 
    // evt.target will tell me what I clicked on.
    // console.log(evt.target);
    evt.target.innerText === '' ? markSpace (evt.target) : alert('select another space');
})

function markSpace (e) {
    console.log(game.players);
    let idValue = e.getAttribute('id');
    // console.log(idValue);
    let currentSquare = document.getElementById(idValue);
    // console.log(currentSquare);
    // check to see which player is moving and then set the box to their character
    game.players[0].currentMove === true // ternary operator 
        ? currentSquare.innerText = game.players[0].XorO 
        : currentSquare.innerText = game.players[1].XorO 
    console.log(game.currentMoveCount);
    game.setPlayerTurn();
    updateGameState(idValue, currentSquare.innerText);
    console.log(gameState.values());
    if ( game.currentMoveCount >= 5) {
        // some method to checkForWin
        if ( game.currentMoveCount == 9 ) {
            alert("The game is tied");
        }
    }

    game.currentMoveCount++;
}

function updateGameState(id, square) {
    gameState.forEach( (v, k) => {
        if ( k === id ) { gameState.set( k, square ) }
    })
}







