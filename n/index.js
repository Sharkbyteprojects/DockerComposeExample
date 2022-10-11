const http = require('node:http');
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbit', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'logs';

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });
    http.createServer((req, res) => {
        res.writeHead(200);
        let msg = `${req.url}\n`;
        channel.publish(exchange, '', Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
        res.write(req.url);
        res.end('\n');
      }).listen(3000, ()=>{
          console.log("Online");
      });
  });
  
});
