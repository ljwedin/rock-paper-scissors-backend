var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
