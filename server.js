const fastify = require('fastify')({
    logger: true
})
const cors = require('@fastify/cors')
const routes = require('./src/routes/mainRoutes')
const dotenv = require('dotenv')
dotenv.config()

fastify.register(cors,{
    origin: "*",
    methods:['GET','POST','PUT','DELETE']
})


routes.forEach(route=>{
    fastify.route(route)
});

fastify.listen({
    port: process.env.SERVER_PORT,
    host: process.env.SERVER_HOST,
},(err,address)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1)
    }
    console.log(`server is running on port: ${process.env.SERVER_PORT}`)
})
