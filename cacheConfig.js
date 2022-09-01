const NodeCache = require('node-cache');

const cache = new NodeCache();

module.exports = (duration) => (req, res, next) => {
    // Is request a GET?
    if (req.method !== 'GET') {
        console.error('Cannot cache non-GET methods');
        return next();
    }

    // Check if key exists in cache
    const key = req.originalUrl;
    const cachedResponse = cache.get(key);

    // If it exists, send cache result
    if (cachedResponse) {
        console.log('Cache hit for ' + key);
        res.send(cachedResponse);
    } else {
        // If not, replace .send with method to set response to cache
        console.log('Cache miss for ' + key);
        res.originalSend = res.send;
        res.send = (body) => {
            res.originalSend(body);
            cache.set(key, body, duration);
        };
        next();
    }
};
