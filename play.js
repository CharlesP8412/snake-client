const {connect} = require('./client');
const {setupInput} = require('./input');

console.log('Connecting to Snek!!!...');

setupInput(connect());