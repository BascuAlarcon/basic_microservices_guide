const express = require('express')

const app = express() 

app.use(express.json())

app.use("/", (req, res) => {
    return res.status(200).json({"msg": "Hello from shopping"})
})

app.listen(8003, () => {
    console.log("Shopping is listening op port 8003")
})