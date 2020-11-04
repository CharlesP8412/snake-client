const { keyMap } = require('./constants');
// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //Function that handles inputs
  handleUserInput();
  return stdin;
};
const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    } else {
      switch (key) {
        case keyMap.MOVE_UP:
          connection.write("Move: up");
          break;
        case keyMap.MOVE_LEFT:
          connection.write("Move: left");
          break;
        case keyMap.MOVE_DOWN:
          connection.write("Move: down");
          break;
        case keyMap.MOVE_RIGHT:
          connection.write("Move: right");
          break;
        case keyMap.TAUNT1:
          connection.write("Say: Nom");
          break;
        case keyMap.TAUNT2:
          connection.write("Say: Mmm");
          break;
      }
    }
  });
};

module.exports = {
  setupInput
};