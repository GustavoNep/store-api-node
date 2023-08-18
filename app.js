// // async errors // 

const express = require('express');
const app = express();
require('dotenv').config()


const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware

//routes

app.get("/", (req,res) => {
    res.send('<h1> Store Api </h1><a href="api/v1/products"> products route </a>')
})

// products route

app.use(notFoundMiddleware); // route not found
app.use(errorMiddleware); // another errors


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connectDb
        app.listen(port, console.log(`Server is listening to ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();



