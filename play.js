const connect = require('./client.js');

const handleUserInput = function () {

  process.stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
  })
};




/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //Function that handles inputs
  handleUserInput();
 
  return stdin;
}


console.log('Connecting...');
connect();
setupInput();