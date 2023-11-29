const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.render("./index.ejs")
})

router.post('/submit-response', (req, res)=>{
    console.table(req.body)
})

module.exports = router