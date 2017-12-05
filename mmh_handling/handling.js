
const hapi = require('hapi');

const inert = require('inert');

const server = new hapi.Server();

server.connection({
   host: 'localhost',
 
   port: Number(process.argv[2] || 8080)
});

server.register(inert, function (err) {
        if (err) throw err;
    });
server.route({
     method: 'GET',
  path: '/',
  handler: function (request, reply) {
            reply.file('index.html');
        }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    });
    
 
 