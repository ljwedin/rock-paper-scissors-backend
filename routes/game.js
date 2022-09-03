var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { check, body, validationResult } = require('express-validator');
const playGame = require('../utils/gameLogic');
const { createNewGame } = require('../middleware/createNewGame');

let games = {};

function addPlayer(req, res) {
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
    games[gameId].playerTwo = req.body.name;
}

function getGameResult(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }

    res.send('Placeholder getGameResult');
}

function makeMove(req, res) {
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
        return res.send('Move registered');
    } else {
        return res.send('Move already registered');
    }
}

router.post(
    '/newGame',
    body('name').isLength({ min: 1, max: 100 }),
    (req, res) => {
        createNewGame(req, res, games);
    }
);

router.post(
    '/:id/join',
    body('name').isLength({ min: 1, max: 100 }),
    check('id').isUUID(4),
    addPlayer
);

router.post(
    '/:id/move',
    body('name').isLength({ min: 1, max: 100 }),
    body('move').custom((value) => {
        if (
            value.toLowerCase() === 'rock' ||
            value.toLowerCase() === 'paper' ||
            value.toLowerCase() === 'scissors'
        ) {
            return true;
        } else {
            throw new Error('Not a valid move');
        }
    }),
    check('id').isUUID(4),
    makeMove
);

router.post(
    '/:id/getGameResult',
    body('name').isLength({ min: 1, max: 100 }),
    check('id').isUUID(4),
    getGameResult
);

module.exports = { router: router, createNewGame: createNewGame };
