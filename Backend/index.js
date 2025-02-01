require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT || 3000;
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello world")
})
app.use('/api', require('../Backend/Routes/chatbot.router'))
app.listen(port, () => {
    console.log(`Server is listening on the port`, port)
})

