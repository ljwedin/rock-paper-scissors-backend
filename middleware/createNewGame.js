const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

function createNewGame(req, res, games) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }

    const newGameId = uuidv4();

    const newGame = {
        playerOne: {
            name: req.body.name,
            move: '',
            isWinner: false,
        },
        playerTwo: {
            name: '',
            move: '',
            isWinner: false,
        },
        gameIsTied: false,
        gameFinished: false,
    };

    games[newGameId] = newGame;

    res.send(newGameId);
}

module.exports = { createNewGame };
