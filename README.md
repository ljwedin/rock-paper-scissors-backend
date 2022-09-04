# Rock paper scissors

### Introduction

This game is made as a code test and meant to be played using Postman. Starting the server locally enables the game to be played on one system as long as the server is running. The purpose of the game is to play rock-paper-scissors with either one winner or a tied result.

---

### Tech

This project uses Express as a base, jest for testing, express-validator for validation and can be used with Postman to make requests.

---

### Installation

To install the neccessary packages, run the command:
`npm install`

To start the server, run the command:
`npm start`

---

## Playing the game

Requests by players are made with the header "Content-Type": "application/json" and body text in JSON format.

Using Postman or other software to make requests, player one initializes a game when the server is running by visiting `localhost:3000/newGame` providing a name key and value in the body of the request. If a game is created successfully, a game ID is sent back from the server.

Player two can now join the game using the key, visiting `localhost:3000/insert-key-here/join`, providing a name in the body of the request. Unless there already is a player two registered, or the name is invalid, the response from the server tells the player they've been added to the game.

When **both** players have joined the game, they each make their moves visiting `localhost:3000/insert-key-here/move` and keeping their name in the body, as well as adding the key "move" and value of their move, either rock, paper or scissors.

Both players can then see the outcome of the game by visiting `localhost:3000/insert-key-here/getGameResult`, keeping their player name in the body. This will provide information on whether they lost, won, the game was tied, or the game is not finished

---

### Testing

Testing has been set up for the game logic in case of change of parameters, variables etc. No further tests are used given the time constraint for the project.

---

### Validation

Input from players, and game IDs, are validated throughout the application. Error messages are sent back to the player to help solve issues that are not due to faulty URLs or server not being online.
