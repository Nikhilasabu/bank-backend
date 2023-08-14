// import
// config: loads .env file contents into process.env.

require('dotenv').config();

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import db
require('./db/connection')

// import router

const router = require('./Routes/router')

// import appmiddleware
const Middleware = require('./Middleware/appMiddleware')

// create express server
const server = express()

// setup port number for server
const PORT = 3000 || process.env.PORT

// use cors,json parser in server app
server.use(cors())
server.use(express.json())

// use app middleware
server.use(Middleware.appMiddleware)

// use router in server app

server.use(router)

// to resolve http request using express server
server.get('/',(req,res)=>{
    res.send(`<h1>Bank server started</h1>`)

})

server.post('/',(req,res)=>{
    res.send("post method")
})

//delete request
server.delete('/',(req,res)=>{
    res.send("Delete method")
})



// run at the server app in a specified port
server.listen(PORT,()=>{
    console.log(`Bank server started at port number ${PORT}`);
})