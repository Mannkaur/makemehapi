let hapi = require('hapi')

let path = require('path')

let vision = require('vision')

let server = new hapi.Server()

server.connection ({
    host:'localhost',
    port:Number(process.argv[2]|| 8080)
})



 server.register(vision, function (err) {
        if (err) throw err;
    });



    server.views({
        engines: {
            html: require('handlebars')
        },
        path: path.join(__dirname, 'template')
    });


server.route({
    method:'GET',
    path: '/',
    handler: 
    {
        view: 'views.html'
    }
})


server.start((err) =>{
    if (err) console.log(err)
})

