const { validationResult } = require('express-validator');

function addPlayer(req, res, games) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }

    const gameId = req.params.id;

    if (games[gameId].playerTwo.length > 0) {
        return res.status(400).json({
            error: 'Game already has two players',
        });
    }

    if (req.body.name === games[gameId].playerOne.name) {
        return res.status(400).json({
            error: 'Name already in use by player one',
        });
    }

    games[gameId].playerTwo = {
        name: req.body.name,
        move: '',
        isWinner: false,
    };

    res.send(req.body.name + ' has joined the game');
}

module.exports = { addPlayer };
