import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";
import Connection from "./models/Connection.js";
import authRoute from "./routes/auth.route.js";
import express from "express"
import loggingMiddleware from "./middlewares/loggingMiddleware.js";
import productRoute from "./routes/product.route.js";

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(loggingMiddleware)
app.get('/', (req, res) => res.json({msg: 'Selamat Datang Di Alagosay App'}))
app.use('/auth', authRoute)
app.use('/product', productRoute)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})
