const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //Rx Data
  conn.on('data', (data) =>{console.log('Msg from Server: ', data)});


  return conn;
}

module.exports = connect;