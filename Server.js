const express = require('express')

const mongoose = require('mongoose')
require('dotenv').config()

const routes = require('./routes/ToDoRoute')

const cors = require('cors')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));


app.use(routes)

app.listen(port, () => console.log(`Listening on port ` + port))