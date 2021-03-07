const express = require("express")
const config = require("config")

const app = express()

app.get('/', (req, res) => {
    //res.status(200).send("Hello world")
    res.sendFile(__dirname+"/public/index.html")
    console.log("index.html loaded sucessfully")
})

const port = process.env.PORT || config.get('port')

app.listen(port, () => console.log(`server is running ${port}`))