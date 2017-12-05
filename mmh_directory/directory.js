let hapi = require('hapi');

let path = require('path');

let inert = require('inert');


let server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2]||8080)
});


server.route({
 
  path: '/foo/bar/baz/{param}',
  method: 'GET',
  handler: {
    directory: {
      path: path.join(__dirname, '/public')
    }
  }
});

server.register(inert, (err) => {
    if (err) throw err;
});


server.start(function(){
    console.log('Server running at:',server.info.uri);
});