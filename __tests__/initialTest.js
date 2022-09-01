const { createNewGame } = require('../routes/game');

describe('Game router', function () {
    test('sends a string (with and uuid) back when connected to', () => {
        const req = {};

        const res = {
            text: '',
            send: function (input) {
                this.text = input;
            },
        };

        createNewGame(req, res);

        expect(res.text).toBeTruthy();
    });
});
