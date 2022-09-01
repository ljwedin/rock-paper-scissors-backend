var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

function createNewGame(req, res) {
    const newGameId = uuidv4();
    res.send(newGameId);
}

/* GET home page. */
router.get('/newGame', createNewGame);

module.exports = { router, createNewGame };
