const { validationResult } = require('express-validator');

function getGameResult(req, res, games) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }

    const name = req.body.name;
    const id = req.params.id;

    if (!games[id]) {
        return res.status(400).json({
            error: 'Game not found',
        });
    }

    if (
        name !== games[id].playerOne.name &&
        name !== games[id].playerTwo.name
    ) {
        return res.status(400).json({
            error: 'Name not found in game',
        });
    }

    if (name === games[id].playerOne.name && games[id].playerOne.isWinner) {
        res.send('You were victorious!');
    } else if (
        name === games[id].playerTwo.name &&
        games[id].playerTwo.isWinner
    ) {
        res.send('You were victorious!');
    } else if (games[id].gameIsTied) {
        res.send('The game was tied!');
    } else if (games[id].gameIsFinished) {
        res.send('You lost!');
    } else {
        res.send('The game is not yet finished');
    }
}

module.exports = { getGameResult };
