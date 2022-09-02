function playGame(game) {
    if (game.playerOne.move === 'rock') {
        if (game.playerTwo.move === 'scissors') {
            game.playerOne.isWinner = true;
        } else if (game.playerTwo.move === 'paper') {
            game.playerTwo.isWinner = true;
        } else {
            game.gameIsTied = true;
        }
    } else if (game.playerOne.move === 'scissors') {
        if (game.playerTwo.move === 'paper') {
            game.playerOne.isWinner = true;
        } else if (game.playerTwo.move === 'rock') {
            game.playerTwo.isWinner = true;
        } else {
            game.gameIsTied = true;
        }
    } else if (game.playerOne.move === 'paper') {
        if (game.playerTwo.move === 'rock') {
            game.playerOne.isWinner = true;
        } else if (game.playerTwo.move === 'scissors') {
            game.playerTwo.isWinner = true;
        } else {
            game.gameIsTied = true;
        }
    }

    game.gameIsFinished = true;

    return game;
}

module.exports = { playGame };
