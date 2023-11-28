const express = require('express')
const path = require('path')
const app = new express()

app.set("view engine", "ejs")

// Serving Static content
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Import routes
const index = require("./routes/index")
app.use('/', index)

// Connect server
const PORT = 3400
app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`)
})