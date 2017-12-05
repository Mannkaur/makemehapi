let hapi = require('hapi')

let joi = require('joi')


let server = new hapi.Server()

server.connection ({
    host:'localhost',
    port:Number(process.argv[2]|| 8080)
})

server.route({
    
        method: 'POST',
  path: '/login',
        config: {
            handler: (req, reply) =>{
                reply('login successful')
            },
            validate: {
               payload: joi.object({
                   isGuest: joi.boolean().required(),
                    username: joi.string().when('isGuest',{is:false, then: joi.required()}),
                    password: joi.string().alphanum(),
                    accessToken: joi.string().alphanum(),
                    
               })
               .options({allowUnknown: true})
            
               .without('password', 'accessToken')
            }
        }
    }
)
        
        
        server.start(function(){
            console.log('Server running at:', server.info.url)
        })
        
 