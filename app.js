// // async errors // 

const express = require('express');
const app = express();
require('dotenv').config()
const connectDB = require('./db/connect')

const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware

//routes

app.get("/", (req,res) => {
    res.send('<h1> Store Api </h1><a href="api/v1/products"> products route </a>')
})

app.use('/api/v1/products', productsRouter)

// products route

app.use(notFoundMiddleware); // route not found ( se n tiver nenhuma rota existente )

app.use(errorMiddleware); // usado para tratar erros de solicitações http, erros em rotas,controladores e outros middleware

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connectDb
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();



