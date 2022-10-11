var express = require('express');
var router = express.Router();

const { check, body } = require('express-validator');
const { createNewGame } = require('../middleware/createNewGame');
const { addPlayer } = require('../middleware/addPlayer');
const { getGameResult } = require('../middleware/getGameResults');
const { makeMove } = require('../middleware/makeMove');

let games = {};

// Göra all validering innan middleware

// Flytta ut till egen fil
function isValidMove(value) {
    if (
        value.toLowerCase() === 'rock' ||
        value.toLowerCase() === 'paper' ||
        value.toLowerCase() === 'scissors'
    ) {
        return true;
    } else {
        throw new Error('Not a valid move');
    }
}

// Bara game ( '/' ) borde starta nytt spel, lägga till spelare 1 bör vara egen endpoint typ /:id/addPlayer
router.post(
    '/newGame',
    body('name').isLength({ min: 1, max: 100 }),
    (req, res) => {
        createNewGame(req, res, games);
    }
);

// Tydligare namn, typ addPlayer? Two? JoinGame?
router.post(
    '/:id/join',
    body('name').isLength({ min: 1, max: 100 }),
    check('id').isUUID(4),
    (req, res) => {
        addPlayer(req, res, games);
    }
);

router.post(
    '/:id/move',
    body('name').isLength({ min: 1, max: 100 }),
    body('move').custom((value) => {
        return isValidMove(value);
    }),
    check('id').isUUID(4),
    (req, res) => {
        makeMove(req, res, games);
    }
);

// GET
router.post(
    '/:id/getGameResult',
    body('name').isLength({ min: 1, max: 100 }),
    check('id').isUUID(4),
    (req, res) => {
        getGameResult(req, res, games);
    }
);

module.exports = router;
