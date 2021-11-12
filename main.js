/*
const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to Pho Ru")
})

app.get('/menu', (req, res) => {
    res.send("Here's our menu")
})

app.get('/menu/:item', (req, res) => {
    console.log(req.params.item)
    res.send("Thank you for picking an item")

    if (req.params.item === "noodle") {
        res.json({ name: "Noodle", type: "main course", bio: "Main stuff lmao" })
    } else if (req.params.item === "coffee") {
        res.json({ name: "Coffee", type: "drink", bio: "Stay awake lol" })
    } else if (req.params.item === "roll") {
        res.json({ name: "Roll", type: "appetizer", bio: "Starter pogger" })
    } else {
        res.json("404 lmao rekt")
    }
})

app.post("/api/signin", (req, res) => {
    if (req.body.username === "lmao" && req.body.password === "lmao2") {
      res.json("Reward point is: 100")
    } else {
      res.json("Incorrect username/password")
    }
}) 

app.get('/about', (req, res) => {
    res.send("Restaurant in Sacramento")
})
*/

const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(path.join(__dirname, "frontend")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"))
})

app.listen(process.env.PORT || 3000)