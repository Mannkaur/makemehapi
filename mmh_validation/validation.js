let hapi = require('hapi')

let joi = require('joi')


let server = new hapi.Server()

server.connection ({
    host:'localhost',
    port:Number(process.argv[2]|| 8080)
})

server.route({
    
        method: 'GET',
  path: '/chickens/{breed}',
        config: {
            handler: (req, reply) =>{
                reply('You asked for chicken' + req.params.breed)
            },
            validate: {
                params: {
                    breed: joi.string().required(),
                }
            }
        }
        
        })
        
        
        
        
        server.start(function(){
            console.log('Server running at:', server.info.url)
        })

