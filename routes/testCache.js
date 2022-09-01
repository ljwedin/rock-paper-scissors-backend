const express = require('express');
const router = express.Router();
const cache = require('../cacheConfig');

router.get('/', cache(300), function (req, res, next) {
    res.send('Response from testCache router');
});

router.get('/test/:test', cache(300), function (req, res, next) {
    res.send('Response from testCache subtest');
});

module.exports = router;
