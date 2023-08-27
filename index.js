import express from "express"
import dotenv from "dotenv"
import routes from './routes/index.js'
import { connectDB } from "./utils/index.js"
import mongoose from "mongoose"

const app = express()
dotenv.config()
connectDB()

app.use(express.json())
const PORT = process.env.PORT || 3000

app.all("/", (req, res) => {
    return res.status(200).send('Server running')
})

app.use(routes)


mongoose.connection.on("connected", () => {
    console.log("DB connected succesfully");
    app.listen(PORT,() => {
        console.log("Server running on port " + PORT)
    })
})