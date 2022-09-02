const NodeCache = require('node-cache');

const cache = new NodeCache();

module.exports = {
    cache: cache,
    cacheSet: (duration) => (req, res, next) => {
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
    },
};
