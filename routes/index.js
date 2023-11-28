const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.render("./index.ejs")
})

router.post('/submit-response', (req, res)=>{
    
})

module.exports = router