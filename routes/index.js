const express = require("express")
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

router.get('/', (req, res)=>{
    res.render("./index.ejs")
})

router.post('/submit-response', (req, res)=>{
    console.table(req.body)
    const response = {
        
    }
})

module.exports = router