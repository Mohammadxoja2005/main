const express = require("express");
const router = express.Router();
const { quote } = require("../models");

router.get("/", async (req,res) => {
    const quotes = await quote.findAll(); 
    res.json(quotes);
}) 

router.post("/", async (req, res) => {
    const quote = req.body; 
    await quote.create(quote); 
    
    res.json(quote); 
});

module.exports = router;
