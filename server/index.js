const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())



app.listen(4004, () => {
    console.log("Server is up on port 4004")
})