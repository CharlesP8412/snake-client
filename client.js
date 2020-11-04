const net = require('net');
const { hostname } = require('os');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //Rx Data from Server
  conn.on('data', (data) => { console.log('Msg from Server: ', data) });

  // Connected Message and send user initials
  conn.on('connect', () => {
    console.log(`Connected to game server`)
    conn.write("Name: CVP")
    // conn.write("Move: up")
    // setTimeout(() => conn.write("Move: left"), 50)
    // setTimeout(() => conn.write("Move: down"), 100)
    // setTimeout(() => conn.write("Move: down"), 150)
    // setTimeout(() => conn.write("Move: right"), 200)
  });


  return conn;
}

module.exports = connect;