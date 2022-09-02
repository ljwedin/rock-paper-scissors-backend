var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const cache = require('../cacheConfig');

function createNewGame(req, res) {
    const newGameId = uuidv4();
    res.send(newGameId);
}

function getGame(req, res) {
    const value = cache.cache.get(req.body.id);
    res.send(value);
}

router.post('/newGame', cache.cacheSet(600), createNewGame);

router.post('/getGame', getGame);

module.exports = { router: router, createNewGame: createNewGame };
