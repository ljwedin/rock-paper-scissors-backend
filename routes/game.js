var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const playGame = require('../utils/gameLogic');

let games = {};

function createNewGame(req, res) {
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

    res.send(games[newGameId]);
}

function getGame(req, res) {
    res.send(value);
}

router.post('/newGame', createNewGame);

router.post('/getGame', getGame);

module.exports = { router: router, createNewGame: createNewGame };
