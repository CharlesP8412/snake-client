const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
    //LHL SERVER
    // host: '135.23.222.131',
    // port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //Rx Data from Server
  conn.on('data', (data) => { console.log('Msg from Server: ', data) });

  // Connected Message and send user initials
  conn.on('connect', () => {
    console.log(`Connected to game server`)
    conn.write("Name: CVP")
    
  });


  return conn;
}

module.exports = {connect};