const { validationResult } = require('express-validator');
const { playGame } = require('../utils/gameLogic');

function makeMove(req, res, games) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }

    const name = req.body.name;
    const id = req.params.id;
    let player;

    if (!games[id]) {
        return res.status(400).json({
            error: 'Game not found',
        });
    }

    if (!games[id].playerTwo.name) {
        return res.status(400).json({
            error: 'Player 2 not yet connected to game',
        });
    }

    if (name === games[id].playerOne.name) {
        player = 'playerOne';
    } else if (name === games[id].playerTwo.name) {
        player = 'playerTwo';
    } else {
        return res.status(400).json({
            error: 'Player name not found in game',
        });
    }

    if (!games[id][player].move) {
        games[id][player].move = req.body.move;
        if (games[id].playerOne.move && games[id].playerTwo.move) {
            games[id] = playGame(games[id]);
        }
        return res.send('Move registered');
    } else {
        return res.send('Move already registered');
    }
}

module.exports = { makeMove };
