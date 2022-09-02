const { playGame } = require('../utils/gameLogic');

const game = {
    playerOne: {
        name: 'Lisa',
        move: '',
        isWinner: false,
    },
    playerTwo: {
        name: 'Erik',
        move: '',
        isWinner: false,
    },
    gameIsTied: false,
    gameIsFinished: false,
};

describe('Game logic', function () {
    describe('Player one wins', function () {
        test('Player one plays rock, player two plays scissors, player one wins and game is finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'rock';
            testGame.playerTwo.move = 'scissors';

            const playedGame = playGame(testGame);

            expect(
                playedGame.playerOne.isWinner && playedGame.gameIsFinished
            ).toBeTruthy();
        });
        test('Player one plays scissors, player two plays paper, player one wins and game is finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'scissors';
            testGame.playerTwo.move = 'paper';

            const playedGame = playGame(testGame);

            expect(
                playedGame.playerOne.isWinner && playedGame.gameIsFinished
            ).toBeTruthy();
        });
        test('Player one plays paper, player two plays rock, player one wins and game is finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'paper';
            testGame.playerTwo.move = 'rock';

            const playedGame = playGame(testGame);

            expect(
                playedGame.playerOne.isWinner && playedGame.gameIsFinished
            ).toBeTruthy();
        });
    });
    describe('Player two wins', function () {
        test('Player two plays rock, player one plays scissors, player one wins and game is finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'scissors';
            testGame.playerTwo.move = 'rock';

            const playedGame = playGame(testGame);

            expect(
                playedGame.playerOne.isWinner && playedGame.gameIsFinished
            ).toBeTruthy();
        });
        test('Player two plays scissors, player one plays paper, player one wins and game is finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'paper';
            testGame.playerTwo.move = 'scissors';

            const playedGame = playGame(testGame);

            expect(
                playedGame.playerOne.isWinner && playedGame.gameIsFinished
            ).toBeTruthy();
        });
        test('Player two plays paper, player one plays rock, player one wins and game is finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'paper';
            testGame.playerTwo.move = 'rock';

            const playedGame = playGame(testGame);

            expect(
                playedGame.playerOne.isWinner && playedGame.gameIsFinished
            ).toBeTruthy();
        });
    });
    describe('Game is tied', function () {
        test('Player one plays rock, player two plays rock, game is tied and finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'rock';
            testGame.playerTwo.move = 'rock';

            const playedGame = playGame(testGame);

            expect(
                playedGame.gameIsTied && playedGame.gameIsFinished
            ).toBeTruthy();
        });
        test('Player one plays scissors, player two plays scissors, game is tied and finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'scissors';
            testGame.playerTwo.move = 'scissors';

            const playedGame = playGame(testGame);

            expect(
                playedGame.gameIsTied && playedGame.gameIsFinished
            ).toBeTruthy();
        });
        test('Player one plays paper, player two plays paper, game is tied and finished', () => {
            const testGame = game;

            testGame.playerOne.move = 'paper';
            testGame.playerTwo.move = 'paper';

            const playedGame = playGame(testGame);

            expect(
                playedGame.gameIsTied && playedGame.gameIsFinished
            ).toBeTruthy();
        });
    });
});
